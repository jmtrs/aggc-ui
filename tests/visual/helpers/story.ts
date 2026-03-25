import type { Page } from "@playwright/test";

export async function openStory(
  page: Page,
  storyId: string,
  variantId: string,
  theme: "light" | "dark" = "light"
) {
  await page.setViewportSize({ width: 1280, height: 960 });
  await page.emulateMedia({ colorScheme: "dark", reducedMotion: "reduce" });
  await page.goto(`/iframe.html?id=${storyId}&viewMode=story`, { waitUntil: "domcontentloaded" });
  await page.waitForSelector(`[data-story-preview-root="${variantId}"]`);
  await page.getByTestId(`story-theme-${theme}`).first().click();
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        transition: none !important;
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        caret-color: transparent !important;
      }
    `,
  });
  await page.waitForTimeout(250);

  return page.locator(`[data-story-preview-root="${variantId}"]`).first();
}
