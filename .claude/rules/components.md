# Component Creation Guide — @aggc/ui

## Checklist for a new component

1. **Create the triplet** in `src/components/`:
   ```
   UiMyComponent.vue
   UiMyComponent.styles.ts
   UiMyComponent.test.ts
   ```

2. **Define styles first** in `UiMyComponent.styles.ts`:
   ```ts
   import { css, cva } from '@styled/css'
   import { someRecipe } from '../styles'   // reuse shared recipes when they exist

   export const uiMyComponentRootClass = cva({
     base: { display: 'flex', gap: '3' },
     variants: {
       size: { sm: { px: '3', py: '2' }, md: { px: '4', py: '3' } },
       disabled: { true: { opacity: 0.5, cursor: 'not-allowed' }, false: { cursor: 'pointer' } },
     },
     defaultVariants: { size: 'md', disabled: false },
   })

   export const uiMyComponentLabelClass = css({ fontSize: 'sm', color: 'text.secondary' })
   ```

3. **Write the component** in `UiMyComponent.vue`:
   ```vue
   <script setup lang="ts">
   import { uiMyComponentRootClass, uiMyComponentLabelClass } from './UiMyComponent.styles'

   withDefaults(defineProps<{
     size?: 'sm' | 'md'
     disabled?: boolean
   }>(), { size: 'md', disabled: false })
   </script>

   <template>
     <div :class="uiMyComponentRootClass({ size, disabled })">
       <span :class="uiMyComponentLabelClass"><slot /></span>
     </div>
   </template>
   ```

4. **Write unit tests** in `UiMyComponent.test.ts`:
   ```ts
   import { mount } from '@vue/test-utils'
   import { describe, expect, it } from 'vitest'
   import UiMyComponent from './UiMyComponent.vue'

   describe('UiMyComponent', () => {
     it('disables interaction when disabled prop is set', () => {
       const wrapper = mount(UiMyComponent, { props: { disabled: true } })
       expect(wrapper.attributes('aria-disabled')).toBe('true')
     })
   })
   ```

5. **Export** from `src/components/index.ts`:
   ```ts
   export { default as UiMyComponent } from './UiMyComponent.vue'
   ```

6. **Create a story** in `src/stories/primitives/UiMyComponent.stories.ts`
   (see `.claude/rules/storybook.md`)

---

## Style export naming convention

```ts
// Pattern: {camelCaseComponentName}{Purpose}Class
export const uiButtonClass = ...           // root element
export const uiButtonContentClass = ...   // inner content wrapper
export const uiButtonBusyContentClass = ... // variant-specific element
```

## Props policy

Only these visual props are allowed on published components:

| Prop | Type example |
|------|-------------|
| `variant` | `'solid' \| 'outline' \| 'subtle'` |
| `size` | `'sm' \| 'md' \| 'lg'` |
| `tone` | `'default' \| 'info' \| 'success' \| 'warning' \| 'danger'` |
| `state` / `disabled` / `loading` | `boolean` |

Never add: `padding`, `color`, `background`, `width`, `margin`, `className`, `style`.

## Accessibility requirements

- Interactive elements need `aria-disabled` (not just `disabled` attribute) when disabled
- Loading states: `aria-busy="true"` on the root element
- Use `aria-label` or `aria-labelledby` when visual label is insufficient
- Dropdown/popover: `aria-expanded`, `aria-controls`, `aria-haspopup`
- Always test keyboard navigation if adding a new interactive primitive
