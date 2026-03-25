import { css, cx } from "@styled/css";
import { insetPanelClass } from "../styles";

export const uiLoadingStateRootClass = cx(
  insetPanelClass,
  css({
    paddingX: "4",
    paddingY: "3",
    display: "flex",
    alignItems: "center",
    gap: "3",
    color: "text.secondary",
    fontSize: "sm",
    lineHeight: "1.5",
  })
);

export const uiLoadingStatePulseClass = css({
  width: "2.5",
  height: "2.5",
  borderRadius: "full",
  flexShrink: "0",
  bg: "text.accent",
  boxShadow: "0 0 0 0 rgba(49,94,255,0.35)",
  animation: "loadingPulse 1.2s ease-out infinite",
});

export const uiLoadingStateContentClass = css({
  display: "grid",
  gap: "0.5",
});

export const uiLoadingStateTitleClass = css({
  fontWeight: "700",
  color: "text.primary",
});
