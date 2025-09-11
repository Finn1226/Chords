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
  C: require("../../assets/chords/C.png"),
  Cm: require("../../assets/chords/Cm.png"),
  C7: require("../../assets/chords/C7.png"),
  Cmaj7: require("../../assets/chords/Cmaj7.png"),
  Cs: require("../../assets/chords/Cs.png"), // C#
  Csm: require("../../assets/chords/Csm.png"),
  Cs7: require("../../assets/chords/Cs7.png"),
  Csb: require("../../assets/chords/Csb.png"), // (rare) C♭ if you ever add it
  Db: require("../../assets/chords/Db.png"),
  Dbm: require("../../assets/chords/Dbm.png"),
  Db7: require("../../assets/chords/Db7.png"),

  // F family
  F: require("../../assets/chords/F.png"),
  Fm: require("../../assets/chords/Fm.png"),
  F7: require("../../assets/chords/F7.png"),
  Fmaj7: require("../../assets/chords/Fmaj7.png"),
  Fs: require("../../assets/chords/Fs.png"), // F#
  Fsm: require("../../assets/chords/Fsm.png"),
  Fs7: require("../../assets/chords/Fs7.png"),
  Gb: require("../../assets/chords/Gb.png"),
  Gbm: require("../../assets/chords/Gbm.png"),
  Gb7: require("../../assets/chords/Gb7.png"),

  // Add more as you create assets...
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
