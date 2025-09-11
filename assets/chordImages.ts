// Image registry + helpers for chord diagrams
// Put your PNGs/JPGs under: assets/chords/
// Naming convention (recommended):
//   Naturals & qualities:   C.png, Cm.png, C7.png, Cmaj7.png, Fsus4.png, ...
//   Sharps use 's':         Cs.png, Csm.png, Cs7.png, ...  (i.e., C# → Cs)
//   Flats keep 'b':         Db.png, Dbm7.png, ...
// This avoids '#' in file names and keeps them filesystem-friendly across OSes.

import { ImageSourcePropType } from "react-native";

// ---- Static requires -------------------------------------------------------
// Metro needs static string literals in require(). That means dynamic
// `require(path)` won't work. So we enumerate the assets here.
// Start with a small set you have, and expand over time.

// Example coverage for C and F families to get you rolling. Add more lines as
// you add images. If a file is missing, the UI will fall back gracefully.
export const CHORD_IMAGE_MAP: Record<string, ImageSourcePropType> = {
  // C family
  C: require("./chords/C.png"),
  C6: require("./chords/C6.png"),
  C7: require("./chords/C7.png"),
  C9: require("./chords/C9.png"),
  Cdim: require("./chords/Cdim.png"),
  Cm: require("./chords/Cm.png"),
  Cm6: require("./chords/Cm6.png"),
  Cm7: require("./chords/Cm7.png"),
  Cmaj7: require("./chords/Cmaj7.png"),
  Csus: require("./chords/Csus.png"),

  // F family
  F: require("./chords/F.png"),
};

// Optional: a generic placeholder image if a chord diagram is missing.
export const FALLBACK_CHORD_IMAGE: ImageSourcePropType | null = null;
// If you add one, e.g. assets/chords/placeholder.png, then set:
// export const FALLBACK_CHORD_IMAGE = require("../../assets/chords/placeholder.png");

// ---- Normalization helpers -------------------------------------------------
// Convert a user/canonical chord name (e.g., "F#maj7", "Bb", "cm") into a key
// that matches our file naming conventions (e.g., "Fsmaj7", "Bb", "Cm").
export function chordNameToKey(name: string): string {
  if (!name) return name;
  // Keep original casing for the first letter, uppercase root; rest as-is
  // Then replace '#' with 's'. (b remains 'b')
  const trimmed = name.trim();
  const root = trimmed[0].toUpperCase();
  const rest = trimmed.slice(1);
  return (root + rest).replaceAll("#", "s");
}

export function getChordImage(name: string): ImageSourcePropType | undefined {
  const key = chordNameToKey(name);
  return CHORD_IMAGE_MAP[key] ?? undefined;
}
