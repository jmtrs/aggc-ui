import { existsSync, readdirSync, statSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const distDir = resolve(rootDir, "dist");
const requiredFiles = [
  "index.js",
  "components.js",
  "styles.js",
  "tokens.js",
  "css.js",
  "css.d.ts",
  "ui.css",
  "fonts.css",
  "index.d.ts",
  "components.d.ts",
  "styles.d.ts",
  "tokens.d.ts",
];

for (const relativePath of requiredFiles) {
  const absolutePath = resolve(distDir, relativePath);

  if (!existsSync(absolutePath)) {
    throw new Error(`Missing published asset: dist/${relativePath}`);
  }
}

const unexpectedTopLevelEntries = readdirSync(distDir).filter((entry) => {
  return entry === "stories" || entry === "docs" || entry === "tests" || entry === "examples";
});

if (unexpectedTopLevelEntries.length > 0) {
  throw new Error(`Unexpected published directories: ${unexpectedTopLevelEntries.join(", ")}`);
}

for (const assetName of ["ui.css", "fonts.css"]) {
  const absolutePath = resolve(distDir, assetName);
  const stats = statSync(absolutePath);

  if (stats.size === 0) {
    throw new Error(`Published asset is empty: dist/${assetName}`);
  }
}

console.log("Package artifacts look valid.");
