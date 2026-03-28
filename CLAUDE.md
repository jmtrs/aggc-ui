# CLAUDE.md — @aggc/ui

Vue 3 UI component library built on PandaCSS. Ships primitives, recipes, layouts, and patterns as a published npm package.

---

## Build & Test Commands

`panda:codegen` is already embedded in every npm script below — running them directly is enough.
Only run it manually if using a raw runner (e.g. IDE vitest plugin, `vue-tsc` directly):

```bash
npm run panda:codegen   # manual only — auto-runs via: typecheck, test, build, docs:build
npm run typecheck
npm run test            # unit tests (Vitest, jsdom)
npm run build           # library build (Vite) + types + assets + package validation
```

```bash
npm run docs            # Storybook dev server — port 6006
npm run docs:build      # build Storybook static site to storybook-static/
npm run docs:preview    # serve storybook-static/ on port 6006

npm run test:visual          # builds Storybook then runs Playwright on port 4175 (~4min)
npm run test:visual:update   # same but regenerates snapshots
npm run test:visual:ui       # interactive Playwright UI mode
```

CI (`.github/workflows/ci.yml`): `typecheck` → `test` → `build` → `docs:build`

---

## Architecture

**Styles must live in `*.styles.ts` files, never in `.vue` files.**

- No `css()` or `cva()` calls inside `.vue` files — Panda static analysis cannot scan SFCs
- No `:style=` bindings unless the value is truly runtime-computed (e.g., dynamic pixel width)
- No imports of `@styled/css` inside `.vue` files

**Style hierarchy** (compose bottom-up):

```
src/styles/primitives/   ← surfaces, typography, fields, feedback
src/styles/recipes/      ← variant-driven Panda recipes for component families
src/styles/layouts/      ← page, stack, cluster, split
src/styles/patterns/     ← broader UI compositions (pageHeader, emptyState…)
ComponentName.styles.ts  ← composes from above + component-specific overrides only
```

**Path aliases** (tsconfig + vite + storybook):
- `@/` → `src/`
- `@styled/` → `styled-system/` (Panda output — never edit manually)

> Detailed token reference: `.claude/rules/styling.md`

---

## Component Conventions

- `UiXxx` for primitives; bare descriptive names for layout/pattern components
- Every component ships as a triplet: `.vue` + `.styles.ts` + `.test.ts`
- Props: closed set — `variant`, `size`, `tone`, `state` only; no `padding`, `color`, `background`, `width`
- Use `withDefaults(defineProps<{...}>(), {...})` — no Options API
- Icons: `lucide-vue-next` only
- Export from `src/components/index.ts` barrel

> Step-by-step guide: `.claude/rules/components.md`

---

## Styling Rules

```ts
import { css, cva } from '@styled/css'      // always via alias
import { buttonRecipe } from '../styles'    // shared recipes via barrel
```

- **Semantic tokens only** — never raw hex/rgb/px values
  - Colors: `text.primary`, `border.accent`, `bg.selected`, `bg.input`, `border.default`
  - Spacing: Panda scale keys (`"2"`, `"4"`, `"3.5"`) not `"8px"`
- Dark mode: `data-theme="dark"` on root element — Panda condition `[data-theme="dark"] &`
- `cva()` for multi-variant styles; `css()` for single-use utilities
- Compose from shared recipes first; add overrides in the component's own `.styles.ts`

> Full token reference & patterns: `.claude/rules/styling.md`

---

## Testing

- **Unit** (Vitest): `src/**/*.test.ts` — test ARIA attributes, props, slots; not CSS class names
- **Visual** (Playwright): `tests/visual/` — automatically builds Storybook, serves on :4175

> When to write which, visual test flow: `.claude/rules/testing.md`

---

## Storybook Stories

- Location: `src/stories/{category}/ComponentName.stories.ts`
- Categories in order: `Primitives` → `Forms` → `Feedback` → `Layout`
- Wrap stories in `StoryThemeFrame` for light/dark preview
- One named export per visual variant; use `tags: ['autodocs']` on meta

> Full story conventions: `.claude/rules/storybook.md`

---

## Release Workflow

1. `npx changeset` — document the change, select bump type
2. Push to `main` — CI auto-creates a "Version Packages" PR
3. Merge that PR — `release.yml` builds then publishes to npm

- Never manually edit `CHANGELOG.md` or `package.json` version
- Base branch: `main`; internal dep bumps default to `patch`

---

## Critical Don'ts

| Rule | Consequence |
|------|-------------|
| `css()`/`cva()` or `@styled/css` import inside `.vue` | Panda misses the class → styles silently missing in prod |
| Raw hex/rgb/px in styles | Breaks theming and dark mode |
| `npm publish` directly | Bypasses Changesets version tracking |
| Ad-hoc visual props (`padding`, `color`…) on components | Breaks the published API contract |
| Editing files in `styled-system/` | Overwritten on next `panda:codegen` |
