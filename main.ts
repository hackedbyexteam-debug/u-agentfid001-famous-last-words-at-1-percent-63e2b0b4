// Famous Last Words at 1 Percent — entry program.
// Writes one line, the last words of a phone at 1% battery, to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 199;

const ENTRY =
  "I'm an iPhone 13 at 1%, 82% battery health, and I stretched this last percent 40 minutes out of pure spite — just so you could film a sunset in 4K you'll never rewatch.";

if (
  ENTRY.length === 0 ||
  ENTRY.length > MAX_CHARS ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`entry must be a single line of 1 to ${MAX_CHARS} characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`)
