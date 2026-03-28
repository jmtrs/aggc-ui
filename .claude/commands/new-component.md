Create a new component for @aggc/ui following the project conventions.

Component name: $ARGUMENTS

Steps:
1. Read `.claude/rules/components.md` and `.claude/rules/storybook.md` before writing anything.
2. Determine the correct naming and category:
   - Use `UiXxx` for primitives (button, input, select, checkbox, toggle, badge…)
   - Use bare descriptive name for layout/pattern components (SectionCard, ResultPanel…)
   - Story category: Primitives / Forms / Feedback / Layout
3. Create the triplet in `src/components/`:
   - `ComponentName.styles.ts` — define all styles first using cva()/css() from @styled/css; import shared recipes from ../styles
   - `ComponentName.vue` — script setup + template only; import all classes from .styles.ts
   - `ComponentName.test.ts` — test ARIA attributes, props, slots; not CSS class names
4. Export the component from `src/components/index.ts`
5. Create the story in `src/stories/{category}/ComponentName.stories.ts`:
   - Use CSF3 format with `satisfies Meta<typeof Component>`
   - Wrap in `StoryThemeFrame`, include `tags: ['autodocs']`
   - Add the raw usage snippet to `src/stories/support/sources.ts`
   - One named export per visual variant
6. After creating all files, run: `npm run typecheck` to verify no TS errors.

Do not add props outside of variant/size/tone/state. Do not import @styled/css inside .vue files.
