import { css, cva } from "@styled/css";

export const uiAvatarRootClass = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    userSelect: "none",
    flexShrink: "0",
    bg: "bg.accentSoft",
    transition: "background-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1)",
  },
  variants: {
    size: {
      sm: { w: "8", h: "8" },
      md: { w: "10", h: "10" },
      lg: { w: "12", h: "12" },
      xl: { w: "14", h: "14" },
    },
    shape: {
      circle: { borderRadius: "full" },
      square: { borderRadius: "lg" },
    },
  },
  defaultVariants: {
    size: "md",
    shape: "circle",
  },
});

export const uiAvatarImageClass = css({
  w: "full",
  h: "full",
  objectFit: "cover",
});

export const uiAvatarFallbackClass = cva({
  base: {
    fontFamily: "heading",
    fontWeight: "600",
    color: "text.accent",
    lineHeight: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    w: "full",
    h: "full",
  },
  variants: {
    size: {
      sm: { fontSize: "xs" },
      md: { fontSize: "sm" },
      lg: { fontSize: "md" },
      xl: { fontSize: "lg" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const uiAvatarIconFallbackClass = cva({
  base: {
    color: "text.muted",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    size: {
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
  },
  defaultVariants: {
    size: "md",
  },
});
