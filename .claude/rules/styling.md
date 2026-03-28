# Styling Rules — @aggc/ui

## Imports

```ts
import { css, cva } from '@styled/css'    // Panda utilities via alias
import { buttonRecipe } from '../styles'  // shared recipes via barrel export
```

Never import from `styled-system/css` directly — always use the `@styled/css` alias.

## When to use cva() vs css()

- `cva()` — component has 2+ variants (checked/unchecked, size sm/md, open/closed)
- `css()` — one-off utility class with no variants

```ts
// cva: variant-driven
export const uiCheckboxRootClass = cva({
  base: { display: 'flex', gap: '3' },
  variants: {
    checked: { true: { bg: 'bg.selected' }, false: { bg: 'bg.input' } },
    disabled: { true: { opacity: 0.5 }, false: { cursor: 'pointer' } },
  },
  compoundVariants: [{ checked: true, disabled: false, css: { _hover: { transform: 'translateY(-1px)' } } }],
  defaultVariants: { checked: false, disabled: false },
})

// css: one-off
export const uiButtonContentClass = css({ display: 'inline-flex', alignItems: 'center', gap: '2' })
```

## Semantic Tokens

**Always use semantic token keys — never raw values.**

| Category | Example tokens |
|----------|---------------|
| Text | `text.primary`, `text.secondary`, `text.muted`, `text.accent` |
| Background | `bg.default`, `bg.card`, `bg.cardStrong`, `bg.input`, `bg.selected` |
| Border | `border.default`, `border.strong`, `border.accent` |
| Spacing | `"1"` `"2"` `"3"` `"4"` `"3.5"` (Panda scale keys, not px) |
| Z-index | `"1"`, `"30"` (token keys, not raw numbers) |

## Dark Mode

Dark mode is controlled by `data-theme="dark"` on the root element.
Panda's custom condition: `[data-theme="dark"] &`

```ts
// In panda.config.ts the condition is already registered.
// Use the _dark shorthand in styles:
export const someClass = css({
  color: 'text.primary',  // semantic token — resolves per theme automatically
})
```

Semantic color tokens already resolve to the correct value per theme. Only use `_dark` explicitly for structural overrides not covered by tokens.

## Composition Order

1. Start with a shared recipe from `src/styles/recipes/` if one exists for the pattern
2. Extend with `css()` for component-specific additions
3. Never duplicate variant logic that already exists in a shared recipe

```ts
// Good: reuse recipe, extend with extra class
export const uiSelectMenuClass = dropdownRecipe({ placement: 'anchored', density: 'cozy' })
export const uiSelectMenuExtraClass = css({ width: '100%', maxHeight: '320px', overflowY: 'auto' })

// Bad: redefine dropdown border/shadow/radius from scratch
```

## Shared Styles Barrel

`src/styles/index.ts` re-exports everything. Import from it:
```ts
import { surfacePanelClass, pageHeaderRootClass, eyebrowClass } from '../styles'
```
