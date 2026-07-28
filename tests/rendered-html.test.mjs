import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("static export renders Shivam's learning hub shell", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Shivam&#x27;s M\.Tech AI &amp; ML Learning Hub/);
  assert.match(html, /Learning deeply/);
  assert.match(html, /Building purposefully/);
  assert.match(html, /Featured Blog Posts/);
  assert.match(html, /Learning Materials/);
  assert.match(html, /toon-shivam\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("chapter export contains MathJax, highlighted code, and reading tools", async () => {
  const html = await readFile(
    new URL(
      "../out/subjects/mathematical-foundations-for-machine-learning/chapters/01-mathematical-language-for-machine-learning/index.html",
      import.meta.url,
    ),
    "utf8",
  );
  assert.match(html, /<mjx-container/);
  assert.match(html, /<title id="math-expression-1">Mathematical expression:/);
  assert.match(html, /aria-labelledby="math-expression-1"/);
  assert.match(html, /class="shiki/);
  assert.match(html, /<table>/);
  assert.match(html, /Copy citation/);
  assert.match(html, /Bookmark/);
  assert.match(html, /Mathematical Language for Machine Learning/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
});

test("keeps the production shell accessible and interactive", async () => {
  const [page, layout, readingTools, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/reading-tools.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /aria-label="Search articles"/);
  assert.match(page, /toggleBookmark/);
  assert.match(page, /setDark/);
  assert.match(page, /setMenuOpen/);
  assert.match(page, /role="status"/);
  assert.match(page, /toon-shivam\.png/);
  assert.match(layout, /M\.Tech AI & ML Learning Hub/);
  assert.match(readingTools, /Copy code/);
  assert.match(readingTools, /navigator\.clipboard/);
  assert.match(readingTools, /mtech-hub:chapter/);
  assert.match(css, /mjx-container/);
  assert.match(css, /overflow-wrap:\s*anywhere/);
  assert.match(css, /\.chapter-prose pre code[\s\S]*?width:\s*max-content/);
  assert.match(css, /\.chapter-prose pre[\s\S]*?overflow-x:\s*auto/);
  assert.match(css, /\.chapter-prose table[\s\S]*?max-width:\s*100%/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /@keyframes toon-float/);
  assert.match(packageJson, /"validate:foundation"/);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview/);
});
