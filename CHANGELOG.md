# Changelog

## 0.4.0

### Minor Changes

- [#4](https://github.com/jmtrs/aggc-ui/pull/4) [`002ee7b`](https://github.com/jmtrs/aggc-ui/commit/002ee7b225e1bc6a82dd357bbbda10c82d57739c) Thanks [@jmtrs](https://github.com/jmtrs)! - Add hover state to `cardRecipe` selectable variant.

  `cardRecipe({ variant: "selectable" })` now responds to hover with a subtle border, background lift and `translateY(-1px)` — consistent with the interaction pattern used by buttons and checkboxes.

## 0.3.0

### Minor Changes

**CSS**

- `import '@aggc/ui/css'` now works without TypeScript errors. `dist/css.js` is a proper side-effect JS entrypoint that loads `ui.css`.
- Added `@aggc/ui/ui.css` as a direct CSS asset export.

**Recipes**

- `buttonRecipe`: added `boxShadow` to all variants, dark mode overrides, and compound hover variants (`translateY`, `boxShadow`, `bg`).
- `badgeRecipe`: added `backdropFilter`, `boxShadow`, and dark mode `boxShadow` to base.
- `inputRecipe`: added `backdropFilter`, `transition`, size-specific `boxShadow` (sm/md/textarea), and dark mode override.

**UiButton**

- `UiButton.styles.ts` now imports `buttonRecipe` directly. `uiButtonClass` is a re-export alias — public API unchanged.

**Tokens**

- Color tokens split into `coreColorTokens` (text, bg, border, badge — safe for web and desktop) and `desktopColorTokens` (result, nav, sync — desktop only).
- `colorTokens` continues to export the full merged map for backward compatibility.
- New subpaths: `@aggc/ui/tokens/core` and `@aggc/ui/tokens/desktop-only`.

## 0.1.0

- Initial extraction of shared tokens, Panda styles, and Vue base components from the AGGC desktop app.
