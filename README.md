# `@aggc/ui`

Shared Vue UI primitives, styles, and patterns for AGGC desktop and web surfaces.

## Scope

This package is intentionally limited to reusable UI:

- theme tokens
- Panda styles, recipes, layouts, and patterns
- visual Vue components with stable props and slots

This package does not include:

- stores
- routing
- Tauri integrations
- filesystem access
- product-specific feature flows

## Installation

```bash
npm install @aggc/ui
```

Peer dependency:

- `vue@^3.5`

## Usage

```ts
import "@aggc/ui/css";
import { UiButton, StatusBadge } from "@aggc/ui";
```

If you want the package fonts as well:

```ts
import "@aggc/ui/fonts";
import "@aggc/ui/css";
```

You can also consume the public subpaths:

- `@aggc/ui/components`
- `@aggc/ui/styles`
- `@aggc/ui/tokens` — full token map (core + desktop-only)
- `@aggc/ui/tokens/core` — shared tokens: `text.*`, `bg.*`, `border.*`, `badge.*`, spacing, radii, typography, motion
- `@aggc/ui/tokens/desktop-only` — desktop-only tokens: `result.*`, `nav.*`, `sync.*`
- `@aggc/ui/ui.css` — direct CSS asset (for bundlers that handle CSS imports natively)

Everything else in this repo is maintenance tooling for the package itself:

- `src/stories/**` powers Storybook docs
- `tests/visual/**` powers Playwright visual regression
- `examples/vue-consumer/` validates external consumption
- `docs/` contains internal maintenance notes

## Theme contract

`@aggc/ui/css` is intentionally headful. It includes:

- base reset and focus-visible treatment
- minimal theme-aware document colors
- shared animation keyframes used by the exported components

`@aggc/ui/css` does not embed fonts anymore. Load `@aggc/ui/fonts` if you want the default IBM Plex Sans and Space Grotesk setup from the package itself.

Consumers should set `data-theme="dark"` on a parent container or document root for dark mode.

## Variant policy

Shared components expose a closed set of visual props:

- `size`
- `variant`
- `tone`
- `state`

Do not add ad hoc visual props like raw `padding`, `color`, or `background` to product code. If a visual need is reusable, add it as a documented recipe or component variant here.

## Development

```bash
npm install
npm run typecheck
npm run test
npm run docs
npm run test:visual
npm run build
```

## Release workflow

- Record versioned changes with `npm run changeset`
- CI must pass `typecheck`, `test`, and `build`
- Releases are published from `main` through Changesets

## Stories and visual testing

Storybook is the human-facing source of truth for component stories, examples and docs.

The Storybook manager stays in dark mode. Each component story exposes its own local light/dark preview switch without changing the global docs shell.

- `npm run docs`
- `npm run docs:build`
- `npm run docs:preview`

Playwright visual regression runs against `iframe.html` routes generated from those same Storybook stories.

- `npm run test:visual`
- `npm run test:visual:update`
- `npm run test:visual:ui`

Example test targets:

- `/iframe.html?id=ui-button--solid&viewMode=story`
- `/iframe.html?id=ui-select--open&viewMode=story`

That keeps previews, code examples and screenshot baselines tied to one story system instead of separate demos.

These docs and tests are internal repo tooling. They are not part of the published package API.

## Contribution boundary

The package must stay platform-agnostic.

Do not add:

- router-aware components
- stores or feature state
- Tauri or filesystem bindings
- product-only workflows

## Publishing policy

- semver for API and visual breakage
- public exports only through documented entrypoints
- reusable pieces must stay platform-agnostic

## Accessibility baseline

Shared components should provide:

- keyboard support when interactive
- visible focus treatment
- disabled and loading states
- reduced-motion friendly animations where applicable
