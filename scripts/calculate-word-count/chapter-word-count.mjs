import { readFile } from "node:fs/promises";

const path = process.argv[2];
if (!path) {
  console.error("Usage: node scripts/calculate-word-count/chapter-word-count.mjs <chapter.mdx>");
  process.exit(2);
}

const source = await readFile(path, "utf8");
const withoutFrontMatter = source.replace(/^---[\s\S]*?---\s*/, "");
const withoutReferences = withoutFrontMatter.replace(/^##\s+\d+\.\s+References\s*$[\s\S]*/im, "");
const prose = withoutReferences
  .replace(/```[\s\S]*?```/g, " ")
  .replace(/^#{1,6}\s+.*$/gm, " ")
  .replace(/`[^`]+`/g, " ")
  .replace(/\$\$[\s\S]*?\$\$/g, " ")
  .replace(/\$[^$]+\$/g, " ")
  .replace(/^\s*[-*+]\s+/gm, " ")
  .replace(/^\s*\d+[.)]\s+/gm, " ")
  .replace(/[#>*_~[\](){}|]/g, " ")
  .replace(/https?:\/\/\S+/g, " ");

const words = prose.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) ?? [];
console.log(JSON.stringify({ path, meaningfulProseWords: words.length }, null, 2));
if (words.length < 3000) process.exitCode = 1;
