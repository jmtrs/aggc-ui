import { css, cva } from "@styled/css";

export const uiToastViewportClass = css({
  position: "fixed",
  bottom: "4",
  right: "4",
  zIndex: "50",
  display: "flex",
  flexDirection: "column",
  gap: "2",
  w: "360px",
  maxW: "calc(100vw - 2rem)",
  maxHeight: "calc(100dvh - 2rem)",
  pointerEvents: "none",
  outline: "none",
});

export const uiToastRootClass = cva({
  base: {
    display: "flex",
    alignItems: "flex-start",
    gap: "3",
    p: "4",
    borderRadius: "lg",
    borderWidth: "1px",
    bg: "bg.cardStrong",
    borderColor: "border.default",
    boxShadow:
      "0 4px 12px -4px rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    pointerEvents: "auto",
    position: "relative",
    overflow: "hidden",
    transition: "all 240ms cubic-bezier(0.16, 1, 0.3, 1)",
    _dark: {
      boxShadow:
        "0 4px 12px -4px rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.24)",
    },
    '&[data-state="open"]': {
      animation: "toastSlideIn 240ms cubic-bezier(0.16, 1, 0.3, 1)",
    },
    '&[data-state="closed"]': {
      animation: "toastFadeOut 160ms cubic-bezier(0.25, 0.1, 0.25, 1)",
    },
    '&[data-swipe="move"]': {
      transform: "translateX(var(--reka-toast-swipe-move-x))",
    },
    '&[data-swipe="cancel"]': {
      transform: "translateX(0)",
      transition: "transform 200ms ease-out",
    },
    '&[data-swipe="end"]': {
      animation: "toastSwipeOut 100ms ease-out",
    },
  },
  variants: {
    tone: {
      success: {
        borderColor: "badge.successBorder",
        bg: "badge.successBg",
      },
      error: {
        borderColor: "badge.dangerBorder",
        bg: "badge.dangerBg",
      },
      info: {
        borderColor: "badge.infoBorder",
        bg: "badge.infoBg",
      },
      warning: {
        borderColor: "badge.warningBorder",
        bg: "badge.warningBg",
      },
    },
  },
  defaultVariants: {
    tone: "info",
  },
});

export const uiToastIconClass = cva({
  base: {
    flexShrink: "0",
    w: "5",
    h: "5",
  },
  variants: {
    tone: {
      success: { color: "badge.successText" },
      error: { color: "badge.dangerText" },
      info: { color: "badge.infoText" },
      warning: { color: "badge.warningText" },
    },
  },
  defaultVariants: {
    tone: "info",
  },
});

export const uiToastContentClass = css({
  flex: "1",
  minW: "0",
});

export const uiToastTitleClass = css({
  fontWeight: "600",
  fontSize: "sm",
  color: "text.primary",
  lineHeight: "1.4",
});

export const uiToastDescriptionClass = css({
  fontSize: "sm",
  color: "text.secondary",
  lineHeight: "1.5",
});

export const uiToastCloseClass = css({
  position: "absolute",
  top: "3",
  right: "3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "6",
  h: "6",
  borderRadius: "md",
  border: "none",
  bg: "transparent",
  color: "text.muted",
  cursor: "pointer",
  flexShrink: "0",
  transition:
    "color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), background 160ms cubic-bezier(0.25, 0.1, 0.25, 1)",
  _hover: {
    bg: "bg.hover",
    color: "text.primary",
  },
  _focusVisible: {
    outline: "2px solid",
    outlineColor: "border.accent",
    outlineOffset: "2px",
  },
});
