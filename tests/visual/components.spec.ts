import { expect, test } from "@playwright/test";
import { openStory } from "./helpers/story";

const storyMatrix = [
  { storyId: "ui-button--solid", variantId: "solid", snapshot: "ui-button-solid" },
  { storyId: "ui-button--outline", variantId: "outline", snapshot: "ui-button-outline" },
  { storyId: "ui-button--loading", variantId: "loading", snapshot: "ui-button-loading" },
  { storyId: "ui-button--subtle", variantId: "subtle", snapshot: "ui-button-subtle" },
  { storyId: "ui-checkbox--unchecked", variantId: "unchecked", snapshot: "ui-checkbox-unchecked" },
  { storyId: "ui-checkbox--checked", variantId: "checked", snapshot: "ui-checkbox-checked" },
  { storyId: "ui-checkbox--disabled", variantId: "disabled", snapshot: "ui-checkbox-disabled" },
  { storyId: "ui-select--closed", variantId: "closed", snapshot: "ui-select-closed" },
  { storyId: "ui-select--open", variantId: "open", snapshot: "ui-select-open" },
  { storyId: "ui-select--small", variantId: "small", snapshot: "ui-select-small" },
  { storyId: "ui-loading-state--overview", variantId: "overview", snapshot: "loading-state" },
  { storyId: "ui-skeleton--stack", variantId: "stack", snapshot: "skeleton-stack" },
  { storyId: "ui-skeleton--variants", variantId: "variants", snapshot: "skeleton-variants" },
  { storyId: "result-panel--success", variantId: "success", snapshot: "result-panel-success" },
  { storyId: "result-panel--failure", variantId: "failure", snapshot: "result-panel-failure" },
  { storyId: "section-card--default", variantId: "default", snapshot: "section-card-default" },
  { storyId: "section-card--scroll-body", variantId: "scroll-body", snapshot: "section-card-scroll-body" },
  { storyId: "status-badge--tones", variantId: "tones", snapshot: "status-badge-tones" },
  { storyId: "ui-segmented-control--overview", variantId: "overview", snapshot: "segmented-control-overview" },
  { storyId: "page-surface--overview", variantId: "overview", snapshot: "page-surface-overview" },
] as const;

for (const theme of ["light", "dark"] as const) {
  for (const entry of storyMatrix) {
    test(`${entry.snapshot} renders in ${theme}`, async ({ page }) => {
      const target = await openStory(page, entry.storyId, entry.variantId, theme);
      await expect(target).toHaveScreenshot(`${entry.snapshot}-${theme}.png`, {
        animations: "disabled",
        caret: "hide",
        scale: "device",
      });
    });
  }
}
