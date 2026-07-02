---
"@aggc/ui": minor
---

DataTable: fix mobile bulk-actions row clipping and reduce toolbar top padding

`mobileActionsRow` now uses `min-height` instead of a fixed `height` and no longer clips overflow — bulk-action buttons are always visible regardless of text length or button count. `mobileSearchRow` top padding reduced from `3` to `2` for tighter spacing on small screens.
