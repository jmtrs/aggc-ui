---
"@aggc/ui": minor
---

Publish `src/` in the npm tarball for PandaCSS consumers.

PandaCSS uses static analysis to find `cva()`, `css()` calls. The compiled `dist/` renames
these functions (Rollup tree-shaking), making them invisible to PandaCSS. Consumers that use
PandaCSS must scan the source files instead.

Add to `panda.config.ts`:
```ts
include: [
  './src/**/*.{ts,vue}',
  './node_modules/@aggc/ui/src/**/*.{ts,vue}',
]
```
