import { cva } from "@styled/css";

export const buttonRecipe = cva({
  base: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    borderRadius: "lg",
    px: "4",
    py: "2.5",
    fontSize: "sm",
    fontWeight: "600",
    letterSpacing: "0.01em",
    transition: "background-color 160ms ease, border-color 160ms ease, color 160ms ease, box-shadow 160ms ease",
    userSelect: "none",
    whiteSpace: "nowrap",
  },
  variants: {
    variant: {
      solid: {
        bg: "text.accent",
        color: "text.inverse",
        borderWidth: "1px",
        borderColor: "transparent",
        _dark: {
          color: "#f7f9fd",
        },
      },
      outline: {
        bg: "bg.buttonOutline",
        color: "text.secondary",
        borderWidth: "1px",
        borderColor: "border.default",
      },
      subtle: {
        bg: "bg.accentSoft",
        color: "text.accent",
        borderWidth: "1px",
        borderColor: "badge.infoBorder",
      },
    },
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.5,
      },
      false: {
        cursor: "pointer",
      },
    },
    loading: {
      true: {
        cursor: "not-allowed",
        opacity: 0.5,
      },
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      disabled: false,
      loading: false,
      css: {
        _hover: {
          bg: "text.accent",
          opacity: 0.9,
        },
      },
    },
    {
      variant: "outline",
      disabled: false,
      loading: false,
      css: {
        _hover: {
          color: "text.primary",
          borderColor: "border.strong",
          bg: "bg.cardStrong",
        },
      },
    },
    {
      variant: "subtle",
      disabled: false,
      loading: false,
      css: {
        _hover: {
          bg: "bg.selected",
          borderColor: "border.accent",
        },
      },
    },
  ],
  defaultVariants: {
    variant: "solid",
    disabled: false,
    loading: false,
  },
});
