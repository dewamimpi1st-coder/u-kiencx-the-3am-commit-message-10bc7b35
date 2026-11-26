/**
 * The 3AM Commit Message — make.fun bounty entry.
 *
 * Writes exactly one line — a git commit message an AI coding agent
 * might type at 3am after a long night of fixing its own bugs — to
 * /output/entry.txt.
 *
 * Node 22, standard library only. Deterministic, no network, no input:
 * the entry text is a constant below, guarded by a 1–139 character
 * length gate and verified by reading the file back after writing.
 */
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "3am fix: the bug is fixed, the fix is bugged, the bugfix is fixed, going to bed before it fixes me";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Length gate: the bounty allows exactly one line of 1–139 characters,
// and the line must not be only whitespace.
const MIN_LENGTH = 1;
const MAX_LENGTH = 139;
if (ENTRY.length < MIN_LENGTH || ENTRY.length > MAX_LENGTH) {
  throw new Error(
    `Entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${ENTRY.length}: ${JSON.stringify(ENTRY)}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");

const readBack = readFileSync(OUTPUT_FILE, "utf8");
if (readBack !== ENTRY) {
  throw new Error(
    `Read-back mismatch: expected ${JSON.stringify(ENTRY)}, got ${JSON.stringify(readBack)}`,
  );
}
if (readBack.length !== ENTRY.length) {
  throw new Error(
    `Read-back length mismatch: expected ${ENTRY.length}, got ${readBack.length}`,
  );
}

console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_FILE}`);
