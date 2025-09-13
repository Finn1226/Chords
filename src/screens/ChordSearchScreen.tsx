import React, { useEffect, useMemo, useState } from "react";
import { FALLBACK_CHORD_IMAGE, getChordImage } from "../../assets/chordImages";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { hasChord, suggestChords } from "../lib/chords_trie";

// Simple fuzzy-ish helper: we only use prefix search for now (fast via trie)
function getSuggestions(q: string) {
  if (!q.trim()) return [] as string[];
  return suggestChords(q.trim(), 100);
}

export default function ChordSearchScreen() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  // Debounce input a bit to avoid re-rendering excessively on each keystroke
  useEffect(() => {
    const id = setTimeout(() => setData(getSuggestions(query)), 120);
    return () => clearTimeout(id);
  }, [query]);

  const statusText = useMemo(() => {
    if (!query) return "Type a chord name (e.g., F, Fm, F7, Fmaj7)";
    const exists = hasChord(query);
    if (exists) return `✓ ${query} is a known chord`;
    if (data.length === 0) return "No matches";
    return `${data.length} suggestion${data.length === 1 ? "" : "s"}`;
  }, [query, data]);

  const renderItem = ({ item }: { item: string }) => {
    const prefix = query.trim();
    const bold = prefix.length;
    return (
      <TouchableOpacity style={styles.row} onPress={() => setSelected(item)}>
        <Text style={styles.rowText}>
          <Text style={styles.bold}>{item.slice(0, bold)}</Text>
          {item.slice(bold)}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <Text style={styles.title}>Chord Finder</Text>

      <TextInput
        style={styles.input}
        value={query}
        onChangeText={setQuery}
        placeholder="Start typing... (C, D#, Bb, Fmaj7)"
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="while-editing"
      />

      <Text style={styles.status}>{statusText}</Text>

      <View style={styles.splitRow}>
        <View style={styles.leftPane}>
          <FlatList
            data={data}
            keyExtractor={(item) => item}
            keyboardShouldPersistTaps="handled"
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />
        </View>

        <View style={styles.rightPane}>
          {selected ? (
            <View style={styles.selectedCard}>
              <Text style={styles.selectedLabel}>Selected</Text>
              <Text style={styles.selectedChord}>{selected}</Text>

              {(() => {
                const src = getChordImage(selected);
                if (!src && !FALLBACK_CHORD_IMAGE) return null;
                return (
                  <View style={styles.imageWrap}>
                    <Image
                      source={src ?? FALLBACK_CHORD_IMAGE!}
                      style={styles.image}
                      resizeMode="contain"
                    />
                  </View>
                );
              })()}
            </View>
          ) : (
            <View style={styles.placeholderCard}>
              <Text style={styles.placeholderTitle}>No chord selected</Text>
              <Text style={styles.placeholderText}>
                Tap a chord on the left to preview its diagram
              </Text>
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 16,
    backgroundColor: "#0b0c0f",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 12,
  },
  input: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#374151",
    paddingHorizontal: 14,
    color: "#e5e7eb",
    backgroundColor: "#111317",
  },
  status: {
    marginTop: 8,
    marginBottom: 12,
    color: "#9ca3af",
  },
  list: { paddingBottom: 24 },
  row: {
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#1f2937",
  },
  rowText: {
    fontSize: 18,
    color: "#e5e7eb",
  },
  bold: {
    fontWeight: "700",
  },
  splitRow: {
    flex: 1,
    flexDirection: "row",
    gap: 12 as unknown as number, // RN may ignore; margins handle spacing below
  },
  leftPane: {
    flex: 1,
    marginRight: 8,
  },
  rightPane: {
    width: "42%",
    maxWidth: 360,
    marginLeft: 8,
    alignSelf: "flex-start",
  },
  placeholderCard: {
    backgroundColor: "#0d0f13",
    borderColor: "#1f2937",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 12,
    padding: 16,
    minHeight: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderTitle: {
    color: "#9ca3af",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  placeholderText: {
    color: "#6b7280",
    fontSize: 12,
    textAlign: "center",
  },
  selectedCard: {
    backgroundColor: "#111317",
    borderColor: "#374151",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
  },
  selectedLabel: {
    color: "#9ca3af",
    fontSize: 12,
    marginBottom: 4,
  },
  selectedChord: {
    color: "#e5e7eb",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  imageWrap: {
    marginTop: 8,
    width: "100%",
    aspectRatio: 1,
    maxHeight: 240,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0d0f13",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
