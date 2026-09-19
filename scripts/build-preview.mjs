import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "dist-preview");
mkdirSync(join(output, "en"), { recursive: true });
for (const asset of ["styles.css", "portrait.jpg"]) cpSync(join(root, asset), join(output, asset));
for (const name of ["index.html", "en/index.html"]) {
  const original = readFileSync(join(root, name), "utf8");
  if (!original.includes('<meta name="robots" content="index, follow" />')) throw new Error(`Unexpected robots tag: ${name}`);
  const label = name.startsWith("en/") ? "Site preview" : "Site önizlemesi";
  const banner = `<style>body::before{content:"${label}";display:block;padding:8px 20px;background:#17181c;color:#f4f3ee;font:13px system-ui;text-align:center}</style>`;
  const html = original.replace('content="index, follow"', 'content="noindex, nofollow"').replace("</head>", banner + "\n</head>");
  writeFileSync(join(output, name), html);
}
writeFileSync(join(output, "preview-source.json"), JSON.stringify({
  repository: "YURDAKULOGLU/dryurdakul-web",
  commit: execFileSync("git", ["rev-parse", "HEAD"], { cwd: root, encoding: "utf8" }).trim(),
}) + "\n");
console.log("Built bilingual, noindex preview in dist-preview");
