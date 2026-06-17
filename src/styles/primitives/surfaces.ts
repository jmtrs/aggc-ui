import { css } from "@styled/css";

export const surfacePanelClass = css({
  position: "relative",
  borderRadius: "xl",
  borderWidth: "1px",
  borderColor: "border.subtle",
  bg: "bg.card",
  boxShadow: "0 1px 2px 0 rgba(15,23,42,0.04), 0 1px 3px 0 rgba(15,23,42,0.06)",
  transition: "border-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 160ms cubic-bezier(0.25, 0.1, 0.25, 1)",
  _dark: {
    borderColor: "border.default",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.2), 0 1px 3px 0 rgba(0,0,0,0.24)",
  },
});

export const insetPanelClass = css({
  borderRadius: "lg",
  borderWidth: "1px",
  borderColor: "border.soft",
  bg: "bg.cardAlt",
  transition: "border-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1)",
  _dark: {
    borderColor: "border.subtle",
  },
});

export const elevatedPanelClass = css({
  borderRadius: "lg",
  borderWidth: "1px",
  borderColor: "border.default",
  bg: "bg.cardStrong",
  boxShadow: "0 1px 2px 0 rgba(15,23,42,0.04), 0 4px 12px -4px rgba(15,23,42,0.1)",
  transition: "border-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 160ms cubic-bezier(0.25, 0.1, 0.25, 1)",
  _dark: {
    borderColor: "border.strong",
    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.24), 0 4px 12px -4px rgba(0,0,0,0.4)",
  },
});
