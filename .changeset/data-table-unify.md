---
"@aggc/ui": minor
---

Add UiTooltip primitive (Reka UI-based) and replace the placeholder DataTable with a full-featured, reusable implementation: debounced search, Set-based selection with shift+click range, drag-to-select (mouse + touch), Ctrl/Cmd+A and Escape shortcuts, responsive desktop/mobile layouts, bulk-actions and per-row action slots, and loading skeletons. Fails fast in dev on items missing their id.

Reusable across apps and languages: `selectable` prop to disable the selection column for display-only tables, `labels` prop for i18n of every string, `bodyMaxHeight` prop, client-side `sortable` columns (with `sortMode: client | server` and `v-model:sort`), and client-side `pageSize` pagination (`v-model:page`).
