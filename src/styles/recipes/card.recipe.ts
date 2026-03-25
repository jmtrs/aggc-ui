import { cva } from "@styled/css";

export const cardRecipe = cva({
  base: {
    minWidth: "0",
    borderWidth: "1px",
    transition: "all 160ms ease",
  },
  variants: {
    variant: {
      surface: {
        position: "relative",
        overflow: "hidden",
        borderRadius: "3xl",
        borderColor: "border.subtle",
        bg: "bg.card",
        backdropFilter: "blur(28px) saturate(155%)",
        boxShadow: "0 25px 30px -35px rgba(15,23,42,0.42)",
      },
      inset: {
        borderRadius: "2xl",
        borderColor: "border.soft",
        bg: "bg.cardAlt",
        backdropFilter: "blur(24px) saturate(145%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
      },
      elevated: {
        borderRadius: "2xl",
        borderColor: "border.default",
        bg: "bg.cardStrong",
        backdropFilter: "blur(24px) saturate(145%)",
        boxShadow: "0 16px 32px -28px rgba(15,23,42,0.42)",
      },
      selectable: {
        borderRadius: "2xl",
        borderColor: "border.default",
        bg: "bg.cardAlt",
        cursor: "pointer",
      },
    },
    padding: {
      none: {},
      sm: { p: "3" },
      md: { p: "4" },
      lg: { p: "5" },
      xl: { p: "6" },
    },
    selected: {
      true: {
        borderColor: "border.accent",
        bg: "bg.cardStrong",
      },
    },
  },
  defaultVariants: {
    variant: "surface",
    padding: "md",
  },
});
