import { defineConfig } from "@pandacss/dev";
import { colorTokens } from "./src/tokens/colors";
import { motionTokens } from "./src/tokens/motion";
import { radiusTokens } from "./src/tokens/radius";
import { spacingTokens } from "./src/tokens/spacing";
import { typographyTokens } from "./src/tokens/typography";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{ts,tsx,js,jsx,vue}"],
  exclude: [],
  outdir: "styled-system",
  jsxFramework: "vue",
  conditions: {
    extend: {
      dark: '[data-theme="dark"] &',
    },
  },
  theme: {
    extend: {
      tokens: {
        fonts: typographyTokens.fonts,
        spacing: spacingTokens,
        radii: radiusTokens,
        durations: motionTokens.durations,
      },
      semanticTokens: {
        colors: colorTokens,
      },
    },
  },
  globalCss: {
    "html, body, #app": {
      height: "100%",
    },
    html: {
      colorScheme: "light",
    },
    "[data-theme='dark']": {
      colorScheme: "dark",
    },
    body: {
      margin: "0",
      fontFamily: "body",
      color: "text.primary",
      backgroundColor: "#f6f8fc",
      _dark: {
        backgroundColor: "#0a1018",
      },
    },
    "input:focus-visible, textarea:focus-visible, button:focus-visible, [role='checkbox']:focus-visible, [role='option']:focus-visible": {
      outline: "2px solid var(--colors-text-accent)",
      outlineOffset: "2px",
    },
    "input, textarea, button": { outline: "none" },
    "::selection": {
      background: "rgba(49, 94, 255, 0.24)",
      color: "inherit",
    },
  },
});
