// Image registry + helpers for chord diagrams
// Put your PNGs/JPGs under: assets/chords/
// Naming convention (recommended):
//   Naturals & qualities:   C.png, Cm.png, C7.png, Cmaj7.png, Fsus4.png, ...
//   Sharps use 's' in keys: Cs, Csm, Cs7, ...  (i.e., C# → Cs)
//   Flats keep 'b':         Db, Dbm7, ...
// This avoids '#' in file names and keeps them filesystem-friendly across OSes.

import { ImageSourcePropType } from "react-native";

// ---- Static requires -------------------------------------------------------
// Metro needs static string literals in require(). That means dynamic
// `require(path)` won't work. So we enumerate the assets here.
// Start with a small set you have, and expand over time.

// Example coverage for C and F families to get you rolling. Add more lines as
// you add images. If a file is missing, the UI will fall back gracefully.
export const CHORD_IMAGE_MAP: Record<string, ImageSourcePropType> = {
  // ---------- Naturals ----------
  // A family
  A: require("./chords/A.png"),
  A6: require("./chords/A6.png"),
  A7: require("./chords/A7.png"),
  A9: require("./chords/A9.png"),
  Adim: require("./chords/Adim.png"),
  Am: require("./chords/Am.png"),
  Am6: require("./chords/Am6.png"),
  Am7: require("./chords/Am7.png"),
  Amaj7: require("./chords/Amaj7.png"),
  Aaug: require("./chords/A+.png"),
  Asus: require("./chords/Asus.png"),
  Asus2: require("./chords/Asus.png"),
  Asus4: require("./chords/Asus.png"),

  // B family
  B: require("./chords/B.png"),
  B6: require("./chords/B6.png"),
  B7: require("./chords/B7.png"),
  B9: require("./chords/B9.png"),
  Bdim: require("./chords/Bdim.png"),
  Bm: require("./chords/Bm.png"),
  Bm6: require("./chords/Bm6.png"),
  Bm7: require("./chords/Bm7.png"),
  Bmaj7: require("./chords/Bmaj7.png"),
  Baug: require("./chords/B+.png"),
  Bsus: require("./chords/Bsus.png"),
  Bsus2: require("./chords/Bsus.png"),
  Bsus4: require("./chords/Bsus.png"),

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
  Caug: require("./chords/C+.png"),
  Csus: require("./chords/Csus.png"),
  Csus2: require("./chords/Csus.png"),
  Csus4: require("./chords/Csus.png"),

  // D family
  D: require("./chords/D.png"),
  D6: require("./chords/D6.png"),
  D7: require("./chords/D7.png"),
  D9: require("./chords/D9.png"),
  Ddim: require("./chords/Ddim.png"),
  Dm: require("./chords/Dm.png"),
  Dm6: require("./chords/Dm6.png"),
  Dm7: require("./chords/Dm7.png"),
  Dmaj7: require("./chords/Dmaj7.png"),
  Daug: require("./chords/D+.png"),
  Dsus: require("./chords/Dsus.png"),
  Dsus2: require("./chords/Dsus.png"),
  Dsus4: require("./chords/Dsus.png"),

  // E family
  E: require("./chords/E.png"),
  E6: require("./chords/E6.png"),
  E7: require("./chords/E7.png"),
  E9: require("./chords/E9.png"),
  Edim: require("./chords/Edim.png"),
  Em: require("./chords/Em.png"),
  Em6: require("./chords/Em6.png"),
  Em7: require("./chords/Em7.png"),
  Emaj7: require("./chords/Emaj7.png"),
  Eaug: require("./chords/E+.png"),
  Esus: require("./chords/Esus.png"),
  Esus2: require("./chords/Esus.png"),
  Esus4: require("./chords/Esus.png"),

  // F family
  F: require("./chords/F.png"),
  F6: require("./chords/F6.png"),
  F7: require("./chords/F7.png"),
  F9: require("./chords/F9.png"),
  Fdim: require("./chords/Fdim.png"),
  Fm: require("./chords/Fm.png"),
  Fm6: require("./chords/Fm6.png"),
  Fm7: require("./chords/Fm7.png"),
  Fmaj7: require("./chords/Fmaj7.png"),
  Faug: require("./chords/F+.png"),
  Fsus: require("./chords/Fsus.png"),
  Fsus2: require("./chords/Fsus.png"),
  Fsus4: require("./chords/Fsus.png"),

  // G family
  G: require("./chords/G.png"),
  G6: require("./chords/G6.png"),
  G7: require("./chords/G7.png"),
  G9: require("./chords/G9.png"),
  Gdim: require("./chords/Gdim.png"),
  Gm: require("./chords/Gm.png"),
  Gm6: require("./chords/Gm6.png"),
  Gm7: require("./chords/Gm7.png"),
  Gmaj7: require("./chords/Gmaj7.png"),
  Gaug: require("./chords/G+.png"),
  Gsus: require("./chords/Gsus.png"),
  Gsus2: require("./chords/Gsus.png"),
  Gsus4: require("./chords/Gsus.png"),

  // ---------- Sharps (keys use 's', files use '#') ----------
  // C# subset
  Csdim: require("./chords/C#dim.png"),
  Csm: require("./chords/C#m.png"),
  Csm6: require("./chords/C#m6.png"),
  Csm7: require("./chords/C#m7.png"),

  // F# subset
  Fs: require("./chords/F#.png"),
  Fs7: require("./chords/F#7.png"),
  Fs9: require("./chords/F#9.png"),
  Fsdim: require("./chords/F#dim.png"),
  Fsm: require("./chords/F#m.png"),
  Fsm6: require("./chords/F#m6.png"),
  Fsm7: require("./chords/F#m7.png"),

  // G# subset
  Gsdim: require("./chords/G#dim.png"),
  Gsm: require("./chords/G#m.png"),
  Gsm6: require("./chords/G#m6.png"),
  Gsm7: require("./chords/G#m7.png"),

  // ---------- Flats ----------
  // Ab subset
  Ab: require("./chords/Ab.png"),
  Ab6: require("./chords/Ab6.png"),
  Ab7: require("./chords/Ab7.png"),
  Ab9: require("./chords/Ab9.png"),
  Abmaj7: require("./chords/Abmaj7.png"),
  Abaug: require("./chords/Ab+.png"),
  Absus: require("./chords/Absus.png"),
  Absus2: require("./chords/Absus.png"),
  Absus4: require("./chords/Absus.png"),

  // Bb subset
  Bb: require("./chords/Bb.png"),
  Bb6: require("./chords/Bb6.png"),
  Bb7: require("./chords/Bb7.png"),
  Bb9: require("./chords/Bb9.png"),
  Bbdim: require("./chords/Bbdim.png"),
  Bbm: require("./chords/Bbm.png"),
  Bbm6: require("./chords/Bbm6.png"),
  Bbm7: require("./chords/Bbm7.png"),
  Bbmaj7: require("./chords/Bbmaj7.png"),
  Bbaug: require("./chords/Bb+.png"),
  Bbsus: require("./chords/Bbsus.png"),
  Bbsus2: require("./chords/Bbsus.png"),
  Bbsus4: require("./chords/Bbsus.png"),

  // Db subset
  Db: require("./chords/Db.png"),
  Db6: require("./chords/Db6.png"),
  Db7: require("./chords/Db7.png"),
  Db9: require("./chords/Db9.png"),
  Dbmaj7: require("./chords/Dbmaj7.png"),
  Dbaug: require("./chords/Db+.png"),
  Dbsus: require("./chords/Dbsus.png"),
  Dbsus2: require("./chords/Dbsus.png"),
  Dbsus4: require("./chords/Dbsus.png"),

  // Eb subset
  Eb: require("./chords/Eb.png"),
  Eb6: require("./chords/Eb6.png"),
  Eb7: require("./chords/Eb7.png"),
  Eb9: require("./chords/Eb9.png"),
  Ebdim: require("./chords/Ebdim.png"),
  Ebm: require("./chords/Ebm.png"),
  Ebm6: require("./chords/Ebm6.png"),
  Ebm7: require("./chords/Ebm7.png"),
  Ebmaj7: require("./chords/Ebmaj7.png"),
  Ebaug: require("./chords/Eb+.png"),
  Ebsus: require("./chords/Ebsus.png"),
  Ebsus2: require("./chords/Ebsus.png"),
  Ebsus4: require("./chords/Ebsus.png"),

  // Gb subset (note: missing base Gb.png in assets)
  Gb6: require("./chords/Gb6.png"),
  Gbmaj7: require("./chords/Gbmaj7.png"),
  Gbaug: require("./chords/Gb+.png"),
  Gbsus: require("./chords/Gbsus.png"),
  Gbsus2: require("./chords/Gbsus.png"),
  Gbsus4: require("./chords/Gbsus.png"),
};

// Optional: a generic placeholder image if a chord diagram is missing.
// export const FALLBACK_CHORD_IMAGE: ImageSourcePropType | null = null;
// If you add one, e.g. assets/chords/placeholder.png, then set:
export const FALLBACK_CHORD_IMAGE = require("./chords/placeholder.png");

// ---- Normalization helpers -------------------------------------------------
// Convert a user/canonical chord name (e.g., "F#maj7", "Bb", "cm") into a key
// that matches our file naming conventions (e.g., "Fsmaj7", "Bb", "Cm").
export function chordNameToKey(name: string): string {
  if (!name) return name;
  // Keep original casing for the first letter, uppercase root; rest as-is
  // Then replace '#' with 's' for sharp keys. (b remains 'b')
  const trimmed = name.trim();
  const root = trimmed[0].toUpperCase();
  const rest = trimmed.slice(1);
  return (root + rest).replaceAll("#", "s");
}

export function getChordImage(name: string): ImageSourcePropType | undefined {
  const key = chordNameToKey(name);
  return CHORD_IMAGE_MAP[key] ?? undefined;
}
