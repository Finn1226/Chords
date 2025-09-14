import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Image
          source={require("../assets/images/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>ChordFanta</Text>
        <Text style={styles.subtitle}>Find chord diagrams fast</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Chord Finder</Text>
        <Text style={styles.cardText}>
          Search common chords and preview clean diagrams.
        </Text>
        <Link href="./chords" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Open Chord Finder</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <Text style={styles.tip}>Tip: Use # for sharps and b for flats</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 72,
    paddingHorizontal: 20,
    backgroundColor: "#0b0c0f",
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#e5e7eb",
    letterSpacing: 0.3,
  },
  subtitle: {
    marginTop: 6,
    color: "#9ca3af",
  },
  card: {
    backgroundColor: "#111317",
    borderColor: "#374151",
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  },
  cardTitle: {
    color: "#e5e7eb",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },
  cardText: {
    color: "#9ca3af",
    marginBottom: 14,
  },
  primaryButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#f9fafb",
    fontSize: 16,
    fontWeight: "700",
  },
  tip: {
    marginTop: 12,
    color: "#6b7280",
    textAlign: "center",
  },
});
