import { css, cva } from "@styled/css";

export const uiModalOverlayClass = css({
  position: "fixed",
  inset: "0",
  bg: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(12px)",
  _dark: {
    bg: "rgba(0, 0, 0, 0.5)",
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "50",
  px: "4",
  overscrollBehavior: "contain",
  animation: "fadeIn 160ms cubic-bezier(0.16, 1, 0.3, 1)",
});

export const uiModalContentClass = cva({
  base: {
    bg: "bg.menu",
    borderRadius: "xl",
    borderWidth: "1px",
    borderColor: "border.subtle",
    p: "0",
    display: "flex",
    flexDirection: "column",
    maxH: "calc(100dvh - 2rem)",
    boxShadow:
      "0 16px 48px -8px rgba(0, 0, 0, 0.12), 0 4px 16px -4px rgba(0, 0, 0, 0.06)",
    animation: "modalIn 240ms cubic-bezier(0.16, 1, 0.3, 1)",
    _dark: {
      boxShadow:
        "0 16px 48px -8px rgba(0, 0, 0, 0.56), 0 4px 16px -4px rgba(0, 0, 0, 0.32)",
      borderColor: "border.default",
    },
    _focusVisible: {
      outline: "none",
    },
  },
  variants: {
    size: {
      sm: { w: "380px" },
      md: { w: "480px" },
      lg: { w: "640px" },
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
  p: "6",
  pb: "4",
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
  px: "6",
  pb: "6",
  overflowY: "auto",
  overscrollBehavior: "contain",
});

export const uiModalActionsClass = css({
  display: "flex",
  justifyContent: "flex-end",
  gap: "3",
  p: "6",
  pt: "3",
  borderTopWidth: "1px",
  borderTopColor: "border.soft",
});
