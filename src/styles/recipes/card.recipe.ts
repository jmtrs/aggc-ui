import { cva } from "@styled/css";

export const cardRecipe = cva({
  base: {
    minWidth: "0",
    borderWidth: "1px",
    transition: "border-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), background-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 160ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 160ms cubic-bezier(0.25, 0.1, 0.25, 1)",
  },
  variants: {
    variant: {
      surface: {
        position: "relative",
        borderRadius: "xl",
        borderColor: "border.subtle",
        bg: "bg.card",
        boxShadow: "0 1px 2px 0 rgba(15,23,42,0.04), 0 1px 3px 0 rgba(15,23,42,0.06)",
        _dark: {
          borderColor: "border.default",
          boxShadow: "0 1px 2px 0 rgba(0,0,0,0.2), 0 1px 3px 0 rgba(0,0,0,0.24)",
        },
      },
      inset: {
        borderRadius: "lg",
        borderColor: "border.soft",
        bg: "bg.cardAlt",
        _dark: {
          borderColor: "border.subtle",
        },
      },
      elevated: {
        borderRadius: "lg",
        borderColor: "border.default",
        bg: "bg.cardStrong",
        boxShadow: "0 1px 2px 0 rgba(15,23,42,0.04), 0 4px 12px -4px rgba(15,23,42,0.1)",
        _dark: {
          borderColor: "border.strong",
          boxShadow: "0 1px 2px 0 rgba(0,0,0,0.24), 0 4px 12px -4px rgba(0,0,0,0.4)",
        },
      },
      selectable: {
        borderRadius: "lg",
        borderColor: "border.default",
        bg: "bg.cardAlt",
        cursor: "pointer",
        _hover: {
          borderColor: "border.strong",
          bg: "bg.card",
        },
        _dark: {
          borderColor: "border.strong",
          _hover: {
            borderColor: "border.accent",
          },
        },
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
