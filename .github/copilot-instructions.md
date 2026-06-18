<!-- @aggc/ui — Copilot instructions -->

# @aggc/ui — Vue 3 Component Library

Shared UI primitives, recipes, layouts, patterns, and design tokens built on PandaCSS. Published as `@aggc/ui` on npm.

## Architecture

**All styles MUST live in `.styles.ts` files, never in `.vue` files.**
PandaCSS uses static analysis and cannot scan Vue SFCs.

### Style hierarchy (compose bottom-up)

```
src/styles/primitives/   ← surfaces, typography, fields, feedback
src/styles/recipes/      ← variant-driven cva() recipes (button, badge, card, input, dropdown)
src/styles/layouts/      ← page, stack, cluster, split
src/styles/patterns/     ← pageHeader, emptyState, metricGrid, actionToolbar…
ComponentName.styles.ts  ← composes from above + component-specific overrides only
```

### Path aliases

- `@/` → `src/`
- `@styled/` → `styled-system/` (Panda output — never edit manually)

## Component conventions

### Triplet pattern — every component = 3 files

```
ComponentName.vue          ← script setup + template
ComponentName.styles.ts    ← all css()/cva() calls
ComponentName.test.ts      ← unit tests (ARIA, props, slots)
```

### Naming

- `UiXxx` for primitives (UiButton, UiSelect, UiCheckbox)
- Bare descriptive names for layout/pattern components (SectionCard, ResultPanel, PageSurface)

### Props policy (closed set only)

Allowed visual props: `variant`, `size`, `tone`, `disabled`, `loading`
Never add: `padding`, `color`, `background`, `width`, `margin`, `className`, `style`

### Accessibility

- `aria-disabled` on disabled interactive elements (not just HTML `disabled`)
- `aria-busy="true"` on loading states
- `aria-expanded`, `aria-controls` on dropdowns
- Keyboard navigation for all interactive primitives

## Styling rules

```typescript
import { css, cva } from '@styled/css'      // always via alias
import { buttonRecipe } from '../styles'    // shared recipes via barrel
```

- **Semantic tokens only** — `text.primary`, `bg.card`, `border.accent` (never raw hex/rgb)
- **Spacing** — Panda scale keys (`"2"`, `"4"`, `"3.5"`) not px values
- **Dark mode** — `data-theme="dark"` on root, Panda condition `_dark`
- **cva()** for multi-variant styles; **css()** for single-use utilities
- Start with shared recipe, extend with component-specific `.styles.ts`

### Style export naming

```typescript
export const uiButtonClass = ...           // root element
export const uiButtonContentClass = ...   // inner content wrapper
```

## Storybook

- Location: `src/stories/{category}/ComponentName.stories.ts`
- Categories: `primitives/` → `forms/` → `feedback/` → `layout/`
- Always wrap with `StoryThemeFrame` for light/dark toggle
- CSF3 format, `tags: ['autodocs']`, render-function based
- Source snippets in `src/stories/support/sources.ts`

## Testing

- **Unit** (Vitest): Test ARIA attributes, prop→DOM mapping, slots, state combinations
- **Visual** (Playwright): Runs against Storybook iframe routes
- Do NOT test CSS class names (implementation detail)

## Release (Changesets)

1. `npx changeset` → select `@aggc/ui`, pick bump type, write consumer-facing summary
2. Commit `.changeset/*.md` with the code
3. Merge to `main` → CI opens "Version Packages" PR → merge → auto-publish

Bump guide: `patch` (bug fix) | `minor` (new component/variant/prop) | `major` (breaking change)

## Existing components

UiButton, UiCheckbox, UiField, UiSelect, UiSegmentedControl, UiSkeleton, UiLoadingState, StatusBadge, ResultPanel, SectionCard, PageSurface

## Existing recipes

button, badge, card, input, dropdown

## Tech stack

Vue 3, PandaCSS, Vite 7, TypeScript 5 (strict), Vitest, Playwright, Storybook 9, Changesets, lucide-vue-next
