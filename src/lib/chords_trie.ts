export class TrieNode {
  children: Map<string, TrieNode> = new Map();
  eow = false; // end-of-word
}

export class Trie {
  root = new TrieNode();

  insert(word: string) {
    let node = this.root;
    for (const ch of word) {
      const key = ch.toLowerCase();
      if (!node.children.has(key)) node.children.set(key, new TrieNode());
      node = node.children.get(key)!;
    }
    node.eow = true;
  }

  has(word: string): boolean {
    let node = this.root;
    for (const ch of word) {
      const key = ch.toLowerCase();
      const next = node.children.get(key);
      if (!next) return false;
      node = next;
    }
    return node.eow;
  }

  // Return up to `limit` words that start with `prefix` (case-insensitive)
  suggest(prefix: string, limit = 50): string[] {
    const results: string[] = [];
    let node = this.root;
    const norm = prefix.toLowerCase();

    for (const ch of norm) {
      const next = node.children.get(ch);
      if (!next) return results; // no matches
      node = next;
    }

    const dfs = (cur: TrieNode, path: string) => {
      if (results.length >= limit) return;
      if (cur.eow) results.push(path);
      for (const [ch, child] of cur.children) {
        if (results.length >= limit) break;
        dfs(child, path + ch);
      }
    };

    dfs(node, norm);
    return results;
  }
}

// ---- Chord name catalog ----------------------------------------------------

const ROOTS = [
  // naturals
  "C",
  "D",
  "E",
  "F",
  "G",
  "A",
  "B",
  // sharps
  "C#",
  "D#",
  "F#",
  "G#",
  "A#",
  // flats (include common enharmonic spellings so users can type either)
  "Db",
  "Eb",
  "Gb",
  "Ab",
  "Bb",
];

const QUALITIES = [
  "", // (plain) major triad, e.g., C
  "m", // minor
  "7", // dominant 7
  "maj7", // major 7
  "m7", // minor 7
  "dim", // diminished triad
  "dim7", // fully diminished 7
  "m7b5", // half-diminished (ø7)
  "aug", // augmented
  "6", // major 6
  "m6", // minor 6
  "9", // dominant 9
  "m9", // minor 9
  "11", // 11th
  "13", // 13th
  "sus2",
  "sus4",
  "add9",
];

// Optional extensions like alterations can be added here if you want a bigger set.
// Example: ["7b9", "7#9", "7b5", "7#5", "maj9", "m11", ...]
const EXTRAS: string[] = [];

// Generate a clean, de-duplicated list of chord names.
export function generateChordNames(): string[] {
  const set = new Set<string>();
  for (const root of ROOTS) {
    for (const q of QUALITIES) set.add(root + q);
    for (const extra of EXTRAS) set.add(root + extra);
  }
  return Array.from(set);
}

// Build the trie at module load for convenience.
export const chordTrie = new Trie();
const ALL_CHORDS = generateChordNames();
for (const name of ALL_CHORDS) chordTrie.insert(name);

// Convenience helpers that preserve the user's casing in outputs.
export function hasChord(name: string) {
  return chordTrie.has(name);
}

export function suggestChords(prefix: string, limit = 50): string[] {
  // Our trie stores lowercased paths; re-map suggestions back to canonical
  // capitalization by matching against ALL_CHORDS.
  const lowerSug = chordTrie.suggest(prefix, limit).map((s) => s.toLowerCase());
  const canon: string[] = [];
  for (const c of ALL_CHORDS) {
    if (lowerSug.includes(c.toLowerCase())) canon.push(c);
  }
  return canon.slice(0, limit);
}
