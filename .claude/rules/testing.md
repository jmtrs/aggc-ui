# Testing Rules — @aggc/ui

## Which runner for which scenario

| Scenario | Runner | Command |
|----------|--------|---------|
| Component behavior, props, ARIA, slots | Vitest + Vue Test Utils | `npm run test` |
| Visual appearance, layout, theming | Playwright | `npm run test:visual` |

## Unit Tests (Vitest)

- Files: `src/**/*.test.ts` — co-located in the component triplet
- Environment: jsdom; globals enabled; setup: `src/test/setup.ts`

**What to test:**
- ARIA attributes reflect prop state (`aria-busy`, `aria-disabled`, `aria-expanded`)
- Slot content renders correctly
- Prop → DOM attribute mapping (`disabled`, `type`, `aria-label`)
- State combinations that affect accessibility

**What NOT to test:**
- CSS class names or Panda output (implementation detail)
- Visual appearance (Playwright's job)
- Internal implementation details that don't affect public API

```ts
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import UiButton from './UiButton.vue'

describe('UiButton', () => {
  it('sets aria-busy and disabled when loading', () => {
    const wrapper = mount(UiButton, {
      props: { loading: true, loadingLabel: 'Saving' },
      slots: { default: 'Save' },
    })
    expect(wrapper.attributes('aria-busy')).toBe('true')
    expect(wrapper.attributes('disabled')).toBeDefined()
    expect(wrapper.text()).toContain('Saving')
  })
})
```

## Visual Regression Tests (Playwright)

- Files: `tests/visual/`
- Browser: Chromium only, single worker (no parallelism)
- Timeout: 60s per test; server build timeout: 4 minutes
- Snapshots: `tests/visual/__screenshots__/`
- Base URL: `http://127.0.0.1:4175`

**How it works:**

`npm run test:visual` automatically:
1. Runs `npm run docs:build` (builds Storybook to `storybook-static/`)
2. Serves it on port 4175 with `http-server`
3. Runs Playwright against the static build

Do **not** pre-start Storybook manually for visual tests — the playwright config manages it and sets `reuseExistingServer: false`.

**After intentional visual changes:**
```bash
npm run test:visual:update   # regenerate snapshots
git add tests/visual/__screenshots__
```

**Interactive debugging:**
```bash
npm run test:visual:ui   # opens Playwright UI mode
```

**New story → first-time snapshots:**
Must run `npm run test:visual:update` before `test:visual` will pass. Visual tests fail if no snapshot exists yet.

## Pre-requisite note

`panda:codegen` is embedded in `test` and `docs:build` — no manual step needed when using npm scripts.
Only run `npm run panda:codegen` manually if using the IDE test runner or raw `vitest`/`vue-tsc` directly.
