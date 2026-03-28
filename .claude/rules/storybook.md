# Storybook Conventions — @aggc/ui

## File location & naming

```
src/stories/
  primitives/   UiButton.stories.ts, UiSegmentedControl.stories.ts
  forms/        UiField.stories.ts, UiCheckbox.stories.ts, UiSelect.stories.ts
  feedback/     StatusBadge.stories.ts, UiSkeleton.stories.ts, ResultPanel.stories.ts
  layout/       PageSurface.stories.ts, SectionCard.stories.ts
  support/      StoryThemeFrame.vue, storyStyles.ts, sources.ts
```

Story order in sidebar (fixed in `.storybook/preview.ts`): Primitives → Forms → Feedback → Layout.

## Minimal story template

```ts
import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import { UiMyComponent } from '../../components'
import StoryThemeFrame from '../support/StoryThemeFrame.vue'
import { storySurfaceClass, storySectionLabelClass, storyCaptionClass } from '../support/storyStyles'
import { uiMyComponentSource } from '../support/sources'

const meta = {
  title: 'Primitives/UiMyComponent',   // Category/ComponentName
  id: 'ui-my-component',
  component: UiMyComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: { component: 'One-sentence description of the component purpose.' },
    },
  },
} satisfies Meta<typeof UiMyComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  parameters: { docs: { source: { code: uiMyComponentSource } } },
  render: () => ({
    components: { StoryThemeFrame, UiMyComponent },
    setup() {
      const previewTheme = ref<'light' | 'dark'>('dark')
      return { previewTheme, storySurfaceClass, storySectionLabelClass, storyCaptionClass }
    },
    template: `
      <StoryThemeFrame v-model:theme="previewTheme" preview-id="default">
        <div :class="storySurfaceClass">
          <p :class="storySectionLabelClass">Default</p>
          <UiMyComponent />
          <p :class="storyCaptionClass">Caption describing what this variant shows.</p>
        </div>
      </StoryThemeFrame>
    `,
  }),
}
```

## Rules

- **Always wrap with `StoryThemeFrame`** — provides the light/dark toggle and sets `data-theme` on the preview
- **One named export per visual variant** — e.g. `Solid`, `Outline`, `Loading`, `Disabled`
- **`tags: ['autodocs']`** on every meta — required for autodocs generation
- **Source code**: add the raw usage snippet to `src/stories/support/sources.ts` and reference it via `parameters.docs.source.code`
- **`preview-id`**: must be unique within a story file (used for screenshot targeting in visual tests)
- **No `argTypes` unless required** — stories are render-function based, not controls-based
- **Backgrounds addon is disabled** — don't use `parameters.backgrounds`; use `StoryThemeFrame` instead

## Visual regression tests

Playwright tests navigate to Storybook iframe routes. After adding a new story:

1. Run `npm run test:visual:update` to generate initial snapshots
2. Commit the screenshots in `tests/visual/__screenshots__/`
3. Future runs with `npm run test:visual` will compare against these baselines

The visual suite builds Storybook from scratch before running (4-minute timeout for the server).
Running `test:visual` without committed snapshots will fail — always generate them first.
