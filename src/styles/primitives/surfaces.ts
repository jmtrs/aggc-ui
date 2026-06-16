import { css } from "@styled/css";

export const surfacePanelClass = css({
  position: "relative",
  overflow: "hidden",
  borderRadius: "xl",
  borderWidth: "1px",
  borderColor: "border.subtle",
  bg: "bg.card",
  boxShadow: "0 1px 3px 0 rgba(15,23,42,0.06)",
  _dark: {
    boxShadow: "0 1px 3px 0 rgba(0,0,0,0.24)",
  },
});

export const insetPanelClass = css({
  borderRadius: "lg",
  borderWidth: "1px",
  borderColor: "border.soft",
  bg: "bg.cardAlt",
});

export const elevatedPanelClass = css({
  borderRadius: "lg",
  borderWidth: "1px",
  borderColor: "border.default",
  bg: "bg.cardStrong",
  boxShadow: "0 2px 8px -2px rgba(15,23,42,0.08)",
  _dark: {
    boxShadow: "0 2px 8px -2px rgba(0,0,0,0.32)",
  },
});
