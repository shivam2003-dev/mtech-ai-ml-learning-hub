import { access, readdir, readFile } from "node:fs/promises";
import { join, relative, resolve, sep } from "node:path";

const outputRoot = resolve(process.argv[2] ?? "out");
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const expectedBase = repositoryName ? `/${repositoryName}` : "";
const htmlFiles = await walk(outputRoot);
const failures = [];
let checked = 0;

for (const file of htmlFiles.filter((path) => path.endsWith(".html"))) {
  const html = await readFile(file, "utf8");
  const pageRelative = relative(outputRoot, file).split(sep).join("/");
  const pagePath = pageRelative === "index.html"
    ? `${expectedBase}/`
    : `${expectedBase}/${pageRelative.replace(/index\.html$/, "")}`;
  const hrefs = [...html.matchAll(/<a\b[^>]*\bhref=(?:"([^"]+)"|'([^']+)')/gi)]
    .map((match) => match[1] ?? match[2]);

  for (const href of hrefs) {
    if (!href || /^(?:https?:|mailto:|tel:|javascript:)/i.test(href) || href.startsWith("#")) continue;
    const resolved = new URL(href, `https://static.local${pagePath}`);
    let pathname = decodeURIComponent(resolved.pathname);
    if (expectedBase && pathname.startsWith(`${expectedBase}/`)) pathname = pathname.slice(expectedBase.length);
    if (expectedBase && pathname === expectedBase) pathname = "/";
    const target = pathname.endsWith("/")
      ? join(outputRoot, pathname, "index.html")
      : join(outputRoot, pathname);
    checked += 1;
    try {
      await access(target);
    } catch {
      failures.push({ page: pageRelative, href, target: relative(outputRoot, target) });
    }
  }
}

console.log(JSON.stringify({
  status: failures.length ? "failed" : "passed",
  htmlFiles: htmlFiles.filter((path) => path.endsWith(".html")).length,
  internalLinksChecked: checked,
  failures,
}, null, 2));

if (failures.length) process.exitCode = 1;

async function walk(directory) {
  const output = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) output.push(...await walk(path));
    else output.push(path);
  }
  return output;
}
