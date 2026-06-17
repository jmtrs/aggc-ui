---
"@aggc/ui": minor
---

Design system polish: new button size/tone variants, motion/radius tokens, and hover interaction improvements.

- `buttonRecipe`: add `size` (sm/md/lg) and `tone` (default/danger) variants; improve transitions to cubic-bezier; add focusVisible styles; remove translateY(-1px) hover lift
- `cardRecipe`: update shadow, border, and dark mode; remove translateY(-1px) from selectable hover
- `UiCheckbox`: remove translateY(-1px) from compound hover variants
- New motion tokens: fast/slow durations, default/out/inOut/spring easings
- New radius tokens: 2xs, 3xs, 5xl
- Field, badge, dropdown, select, segmentedControl, skeleton, resultPanel style improvements
