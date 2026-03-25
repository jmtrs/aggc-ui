# Shared UI Style Architecture

This directory is the single entry point for reusable frontend styling primitives.

## Rules

- Keep visual definitions out of `.vue` files.
- Do not add new `css(...)` calls inside `.vue` files.
- Do not add new `:style=` bindings unless the style is truly runtime-driven.
- Prefer importing from the local `src/styles` barrel or the published `@aggc/ui/styles` entrypoint when the export is stable.

## Directory layout

- `primitives/`: low-level reusable classes such as surfaces, typography, fields, and feedback states.
- `recipes/`: variant-driven Panda recipes for reusable component families.
- `layouts/`: generic page, stack, cluster, and split layouts.
- `patterns/`: repeated UI compositions that are broader than a single primitive.

## Migration guidance

- Existing shared styles can keep using `fieldStyles.ts` temporarily, but new work should import from this directory.
- When a component still needs local styling, create `ComponentName.styles.ts` next to it and compose from these shared exports.
- Shrink the allowlist in the architectural validation script as components are migrated away from inline style definitions.
