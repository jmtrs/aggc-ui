import { css } from "@styled/css";

export const surfacePanelClass = css({
  position: "relative",
  overflow: "hidden",
  borderRadius: "3xl",
  borderWidth: "1px",
  borderColor: "border.subtle",
  bg: "bg.card",
  backdropFilter: "blur(28px) saturate(155%)",
  boxShadow: "0 25px 30px -35px rgba(15,23,42,0.42)",
  _before: {
    content: "\"\"",
    position: "absolute",
    inset: "0",
    pointerEvents: "none",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.04) 18%, rgba(255,255,255,0) 100%)",
  },
  _dark: {
    backdropFilter: "blur(12px) saturate(110%)",
    boxShadow: "0 16px 34px -28px rgba(0,0,0,0.92)",
    _before: {
      background: "none",
    },
  },
});

export const insetPanelClass = css({
  borderRadius: "2xl",
  borderWidth: "1px",
  borderColor: "border.soft",
  bg: "bg.cardAlt",
  backdropFilter: "blur(24px) saturate(145%)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
  _dark: {
    backdropFilter: "blur(10px) saturate(105%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
  },
});

export const elevatedPanelClass = css({
  borderRadius: "2xl",
  borderWidth: "1px",
  borderColor: "border.default",
  bg: "bg.cardStrong",
  backdropFilter: "blur(24px) saturate(145%)",
  boxShadow: "0 16px 32px -28px rgba(15,23,42,0.42)",
  _dark: {
    boxShadow: "0 16px 34px -28px rgba(0,0,0,0.92)",
  },
});
