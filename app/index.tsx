import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 12 }}>Welcome</Text>
      <Link href="./chords" style={{ fontSize: 18 }}>
        Go to Chord Finder →
      </Link>
    </View>
  );
}
