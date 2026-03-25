import { coreColorTokens } from "./core-colors";
import { desktopColorTokens } from "./desktop-colors";

/**
 * Full semantic color token map — includes both core (web+desktop) and
 * desktop-only tokens. Used by panda.config.ts in this repo.
 *
 * For a web-only consumer, import coreColorTokens instead.
 */
export const colorTokens = {
  ...coreColorTokens,
  ...desktopColorTokens,
} as const;

export { coreColorTokens } from "./core-colors";
export { desktopColorTokens } from "./desktop-colors";
