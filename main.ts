// Entry for make.fun's "One Letter: Coffee or Tea" bounty.
// The program writes exactly one letter — "A" for coffee — to /output/entry.txt.
// One character, no trailing newline, no explanation, no punctuation.
// The gate requires exactly 1 UTF-8 character, so the file holds "A" alone.
//
// Deterministic: the same fixed text on every run, no network, no clock,
// no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT = "A";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT, "utf8");
