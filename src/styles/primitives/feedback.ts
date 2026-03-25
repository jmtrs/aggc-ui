import { css } from "@styled/css";

export const loadingRegionClass = css({
  position: "relative",
  minWidth: "0",
});

export const errorTextClass = css({
  color: "text.error",
  fontSize: "sm",
  fontWeight: "600",
});

export const mutedTextClass = css({
  color: "text.muted",
  fontSize: "sm",
  lineHeight: "1.6",
});

export const focusRingClass = css({
  outline: "2px solid var(--colors-text-accent)",
  outlineOffset: "2px",
});
