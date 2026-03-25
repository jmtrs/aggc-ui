---
"@aggc/ui": minor
---

Fix CSS entrypoint, complete recipes, and split tokens into core vs desktop-only.

**CSS**
- `import '@aggc/ui/css'` now works without TypeScript errors. `dist/css.js` is a proper side-effect JS entrypoint that loads `ui.css`.
- Added `@aggc/ui/ui.css` as a direct CSS asset export for bundlers that handle CSS imports natively.

**Recipes**
- `buttonRecipe`: added `boxShadow` to all variants, dark mode overrides, and compound variants with hover states (`translateY`, `boxShadow`, `bg`). Now feature-complete relative to what `UiButton` renders.
- `badgeRecipe`: added `backdropFilter`, `boxShadow`, and dark mode `boxShadow` to base.
- `inputRecipe`: added `backdropFilter`, `transition`, size-specific `boxShadow` (sm/md), textarea `boxShadow`, and dark mode override.

**UiButton**
- `UiButton.styles.ts` now imports `buttonRecipe` directly instead of duplicating the CVA. `uiButtonClass` is a re-export alias — public API unchanged.

**Tokens**
- Color tokens split into two named exports:
  - `coreColorTokens` — universal tokens (`text.*`, `bg.*`, `border.*`, `badge.*`). Safe for web and desktop.
  - `desktopColorTokens` — desktop-only tokens (`result.*`, `nav.*`, `sync.*`). Not intended for web consumers.
- `colorTokens` continues to export the full merged map for backward compatibility.
- New package subpaths: `@aggc/ui/tokens/core` and `@aggc/ui/tokens/desktop-only`.
