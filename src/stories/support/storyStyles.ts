import { css, cva } from "@styled/css";

export const storyStackClass = css({
  display: "grid",
  gap: "5",
  alignContent: "start",
  minWidth: "0",
});

export const storyGridClass = css({
  display: "grid",
  gap: "4",
  gridTemplateColumns: {
    base: "1fr",
    md: "repeat(2, minmax(0, 1fr))",
  },
});

export const storyRowClass = css({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "3",
});

export const storySurfaceClass = css({
  display: "grid",
  gap: "4",
  alignContent: "start",
  minWidth: "0",
  maxWidth: "100%",
  padding: { base: "4", md: "5" },
  borderWidth: "1px",
  borderColor: "border.subtle",
  borderRadius: "2xl",
  bg: "bg.card",
  boxShadow: "0 30px 90px -72px rgba(15,23,42,0.7)",
});

export const storyPreviewRootClass = css({
  display: "grid",
  gap: "4",
  alignContent: "start",
  minWidth: "0",
  width: "100%",
  minHeight: "100%",
  padding: { base: "4", md: "5" },
  borderRadius: "3xl",
  borderWidth: "1px",
  borderColor: "border.subtle",
  bg: "bg.canvas",
  boxShadow: "0 30px 90px -72px rgba(15,23,42,0.7)",
});

export const storyPreviewHeaderClass = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "3",
  flexWrap: "wrap",
});

export const storyPreviewActionsClass = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "2",
  fontSize: "xs",
  fontWeight: "700",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  color: "text.muted",
});

export const storyPreviewThemeGroupClass = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "1",
  padding: "1",
  borderRadius: "xl",
  borderWidth: "1px",
  borderColor: "border.subtle",
  bg: "bg.soft",
});

export const storyPreviewThemeButtonClass = cva({
  base: {
    appearance: "none",
    border: "0",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minW: "4.75rem",
    px: "3",
    py: "2",
    borderRadius: "lg",
    fontSize: "sm",
    fontWeight: "700",
    color: "text.secondary",
    cursor: "pointer",
    transitionProperty: "background-color, color, box-shadow",
    transitionDuration: "fast",
    _hover: {
      color: "text.primary",
      bg: "bg.hover",
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "border.accent",
      outlineOffset: "2px",
    },
  },
  variants: {
    active: {
      true: {
        bg: "bg.cardStrong",
        color: "text.primary",
        boxShadow: "0 10px 30px -20px rgba(15,23,42,0.72)",
      },
      false: {},
    },
  },
});

export const storySurfaceCompactClass = css({
  maxWidth: "28rem",
});

export const storySurfaceWideClass = css({
  maxWidth: "48rem",
});

export const storySectionLabelClass = css({
  fontSize: "xs",
  fontWeight: "800",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "text.muted",
});

export const storyCaptionClass = css({
  color: "text.secondary",
  lineHeight: "1.7",
  maxWidth: "42rem",
});

export const storyScrollFrameClass = css({
  maxHeight: "220px",
  overflowY: "auto",
  paddingRight: "1",
});
