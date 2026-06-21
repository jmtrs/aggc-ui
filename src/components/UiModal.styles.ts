import { css, cva } from "@styled/css";

export const uiModalOverlayClass = css({
  position: "fixed",
  inset: "0",
  bg: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(8px)",
  _dark: {
    bg: "rgba(0, 0, 0, 0.5)",
  },
  zIndex: "50",
  overscrollBehavior: "contain",
  animation: "fadeIn 160ms cubic-bezier(0.16, 1, 0.3, 1)",
});

export const uiModalWrapperClass = css({
  position: "fixed",
  inset: "0",
  display: "flex",
  alignItems: { base: "flex-end", sm: "center" },
  justifyContent: "center",
  zIndex: "51",
  pointerEvents: "none",
});

export const uiModalContentClass = cva({
  base: {
    bg: "bg.menu",
    borderWidth: "1px",
    borderColor: "border.subtle",
    p: "0",
    display: "flex",
    flexDirection: "column",
    // Mobile: bottom sheet — desktop: centered via wrapper
    position: { base: "fixed", sm: "relative" },
    bottom: { base: "0", sm: "auto" },
    left: { base: "0", sm: "auto" },
    right: { base: "0", sm: "auto" },
    pointerEvents: "auto",
    borderTopLeftRadius: "xl",
    borderTopRightRadius: "xl",
    borderBottomLeftRadius: { base: "0", sm: "xl" },
    borderBottomRightRadius: { base: "0", sm: "xl" },
    maxH: { base: "90dvh", sm: "calc(100dvh - 2rem)" },
    animation: {
      base: "modalSlideUp 300ms cubic-bezier(0.16, 1, 0.3, 1) backwards",
      sm: "modalIn 240ms cubic-bezier(0.16, 1, 0.3, 1) backwards",
    },
    boxShadow: {
      base: "0 -8px 32px -4px rgba(0, 0, 0, 0.12), 0 -2px 8px -2px rgba(0, 0, 0, 0.06)",
      sm: "0 16px 48px -8px rgba(0, 0, 0, 0.12), 0 4px 16px -4px rgba(0, 0, 0, 0.06)",
    },
    _dark: {
      borderColor: "border.default",
      boxShadow: {
        base: "0 -8px 32px -4px rgba(0, 0, 0, 0.48), 0 -2px 8px -2px rgba(0, 0, 0, 0.24)",
        sm: "0 16px 48px -8px rgba(0, 0, 0, 0.56), 0 4px 16px -4px rgba(0, 0, 0, 0.32)",
      },
    },
    _focusVisible: {
      outline: "none",
    },
  },
  variants: {
    size: {
      sm: { w: { base: "full", sm: "380px" } },
      md: { w: { base: "full", sm: "480px" } },
      lg: { w: { base: "full", sm: "640px" } },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const uiModalHeaderClass = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  p: { base: "4", sm: "6" },
  pb: { base: "3", sm: "4" },
});

export const uiModalHeaderContentClass = css({
  display: "flex",
  flexDirection: "column",
  gap: "1",
});

export const uiModalTitleClass = css({
  fontFamily: "heading",
  fontWeight: "600",
  fontSize: "lg",
  color: "text.primary",
});

export const uiModalDescriptionClass = css({
  fontSize: "sm",
  color: "text.secondary",
  lineHeight: "1.5",
});

export const uiModalCloseClass = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "8",
  h: "8",
  borderRadius: "lg",
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

export const uiModalBodyClass = css({
  px: { base: "4", sm: "6" },
  pb: { base: "4", sm: "6" },
  overflowY: "auto",
  overscrollBehavior: "contain",
});

export const uiModalActionsClass = css({
  display: "flex",
  justifyContent: "flex-end",
  gap: "3",
  p: { base: "4", sm: "6" },
  pt: "3",
  borderTopWidth: "1px",
  borderTopColor: "border.soft",
});
