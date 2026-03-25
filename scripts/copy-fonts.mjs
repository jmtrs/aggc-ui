import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const fontsSourcePath = resolve(rootDir, "src/css/fonts.css");
const fontsTargetPath = resolve(rootDir, "dist/fonts.css");
const baseCssPath = resolve(rootDir, "src/css/base.css");
const generatedCssPath = resolve(rootDir, "styled-system/styles.css");
const uiCssTargetPath = resolve(rootDir, "dist/ui.css");

mkdirSync(resolve(rootDir, "dist"), { recursive: true });
copyFileSync(fontsSourcePath, fontsTargetPath);

const uiCss = `${readFileSync(baseCssPath, "utf8").trim()}\n\n${readFileSync(generatedCssPath, "utf8").trim()}\n`;
writeFileSync(uiCssTargetPath, uiCss);
