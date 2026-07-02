# Changelog

## 1.1.0

### Minor Changes

- DataTable: `mobileActionsRow` now uses `min-height` instead of fixed `height` and no longer clips overflow — bulk-action buttons always visible. `mobileSearchRow` top padding reduced for tighter spacing on small screens.

## 1.0.4

### Patch Changes

- ae36077: Fix modal jump on desktop by separating centering from animation.

  Previously, the modal used `transform: translate(-50%, -50%)` for centering while the animation keyframe `from` state overwrote this with `transform: translate(-50%, calc(-50% + 8px)) scale(0.97)`. With the `backwards` animation property, the keyframe `from` state applied immediately before the animation, causing a visual jump as the modal snapped from its incorrect position to the final centered position.

  Now, a wrapper element handles centering (flexbox) and the content animates independently (translateY + scale), eliminating the conflict between layout and animation transforms.

## 1.0.3

### Patch Changes

- [`5b372fe`](https://github.com/jmtrs/aggc-ui/commit/5b372fec7906555ff5c617b98d8380d3b374c9d7) Thanks [@jmtrs](https://github.com/jmtrs)! - Upgrade vitest to v4 for Vite 7 type compatibility in dev (devDependency only; no runtime or public API impact).

## 1.0.2

### Patch Changes

- [`8a78adc`](https://github.com/jmtrs/aggc-ui/commit/8a78adc7271f8addaad0777c617831e389bb6abd) Thanks [@jmtrs](https://github.com/jmtrs)! - Use changeset publish in release workflow so GitHub Releases and git tags are created automatically.

## 1.0.1

### Patch Changes

- [`a2e6e92`](https://github.com/jmtrs/aggc-ui/commit/a2e6e9289db1930fe76605de77c57fd3e9e1343e) Thanks [@jmtrs](https://github.com/jmtrs)! - Fix release workflow to use changesets/action for automatic GitHub Releases and Version Packages PRs.

## 0.7.1

### Minor Changes

- Design system polish: button size/tone variants, motion/radius tokens, hover interaction improvements.

  - `buttonRecipe`: add `size` (sm/md/lg) and `tone` (default/danger) variants; cubic-bezier transitions; focusVisible styles; remove translateY(-1px) hover lift
  - `cardRecipe`: update shadow, border, and dark mode; remove translateY(-1px) from selectable hover
  - `UiCheckbox`: remove translateY(-1px) from compound hover variants
  - New motion tokens: fast/slow durations, default/out/inOut/spring easings
  - New radius tokens: 2xs, 3xs, 5xl
  - Field, badge, dropdown, select, segmentedControl, skeleton, resultPanel style improvements

## 0.6.0

### Minor Changes

- [#12](https://github.com/jmtrs/aggc-ui/pull/12) [`c0099e2`](https://github.com/jmtrs/aggc-ui/commit/c0099e242435d9384ad78a63a74e1afb173b0a48) Thanks [@jmtrs](https://github.com/jmtrs)! - Simplify surface panels and button recipes for cleaner admin UI

  - surfaces: remove glassmorphism (backdrop-filter, gradient overlays), reduce border-radius from 3xl to xl
  - buttons: replace gradient solid with solid bg, remove inset shadows, fix transition:all to explicit properties
  - SectionCard: eyebrow prop defaults to undefined instead of "Workspace surface"

### Patch Changes

- [#12](https://github.com/jmtrs/aggc-ui/pull/12) [`c0099e2`](https://github.com/jmtrs/aggc-ui/commit/c0099e242435d9384ad78a63a74e1afb173b0a48) Thanks [@jmtrs](https://github.com/jmtrs)! - Add `@storybook/addon-mcp` to Storybook configuration, enabling MCP-based access to component stories and documentation during development.

## 0.5.1

### Patch Changes

- [#10](https://github.com/jmtrs/aggc-ui/pull/10) [`0729377`](https://github.com/jmtrs/aggc-ui/commit/072937703a02d0cd8bc0924fb5d844c1f86745ee) Thanks [@jmtrs](https://github.com/jmtrs)! - Add `@storybook/addon-mcp` to Storybook configuration, enabling MCP-based access to component stories and documentation during development.

## 0.5.0

### Minor Changes

- [`a9a314e`](https://github.com/jmtrs/aggc-ui/commit/a9a314ed05e138b5a2074ce96276b7426113bc0f) Thanks [@jmtrs](https://github.com/jmtrs)! - Publish `src/` in the npm tarball for PandaCSS consumers.

  PandaCSS uses static analysis to find `cva()`, `css()` calls. The compiled `dist/` renames
  these functions (Rollup tree-shaking), making them invisible to PandaCSS. Consumers that use
  PandaCSS must scan the source files instead.

  Add to `panda.config.ts`:

  ```ts
  include: ["./src/**/*.{ts,vue}", "./node_modules/@aggc/ui/src/**/*.{ts,vue}"];
  ```

## 0.4.1

### Patch Changes

- [`b5d9f21`](https://github.com/jmtrs/aggc-ui/commit/b5d9f21f3e49ddfb107c6896ac7f9c47df98f134) Thanks [@jmtrs](https://github.com/jmtrs)! - Fix release workflow: run build before publish so dist/ is included in the npm tarball.

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
