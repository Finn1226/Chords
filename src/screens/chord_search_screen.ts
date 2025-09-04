import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from "react-native";
import { suggestChords, hasChord } from "../lib/chords_trie";

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

      {selected && (
        <View style={styles.selectedCard}>
          <Text style={styles.selectedLabel}>Selected</Text>
          <Text style={styles.selectedChord}>{selected}</Text>
        </View>
      )}

      <FlatList
        data={data}
        keyExtractor={(item) => item}
        keyboardShouldPersistTaps="handled"
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
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
  list: {
    paddingBottom: 24,
  },
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
  selectedCard: {
    backgroundColor: "#111317",
    borderColor: "#374151",
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
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
  },
});
