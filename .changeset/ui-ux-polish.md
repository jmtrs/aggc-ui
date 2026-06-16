---
"@aggc/ui": minor
---

Simplify surface panels and button recipes for cleaner admin UI

- surfaces: remove glassmorphism (backdrop-filter, gradient overlays), reduce border-radius from 3xl to xl
- buttons: replace gradient solid with solid bg, remove inset shadows, fix transition:all to explicit properties
- SectionCard: eyebrow prop defaults to undefined instead of "Workspace surface"
