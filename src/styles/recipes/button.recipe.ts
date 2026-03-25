import { cva } from "@styled/css";

export const buttonRecipe = cva({
  base: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    borderRadius: "xl",
    px: "4",
    py: "3",
    fontSize: "sm",
    fontWeight: "700",
    letterSpacing: "0.01em",
    backdropFilter: "blur(22px) saturate(140%)",
    transition: "all 160ms ease",
    userSelect: "none",
    whiteSpace: "nowrap",
  },
  variants: {
    variant: {
      solid: {
        bg: "linear-gradient(135deg, rgba(31,67,182,0.96) 0%, rgba(49,94,255,0.92) 100%)",
        color: "text.inverse",
        borderWidth: "1px",
        borderColor: "rgba(255,255,255,0.18)",
        boxShadow: "0 22px 36px -24px rgba(49,94,255,0.78), inset 0 1px 0 rgba(255,255,255,0.24)",
        _dark: {
          color: "#f7f9fd",
          borderColor: "rgba(255,255,255,0.06)",
          boxShadow: "0 22px 40px -24px rgba(71,121,255,0.55), inset 0 1px 0 rgba(255,255,255,0.18)",
        },
      },
      outline: {
        bg: "bg.buttonOutline",
        color: "text.secondary",
        borderWidth: "1px",
        borderColor: "border.default",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
        _dark: {
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
        },
      },
      subtle: {
        bg: "bg.accentSoft",
        color: "text.accent",
        borderWidth: "1px",
        borderColor: "badge.infoBorder",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)",
        _dark: {
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
        },
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
          transform: "translateY(-1px)",
          boxShadow: "0 24px 42px -24px rgba(49,94,255,0.82), inset 0 1px 0 rgba(255,255,255,0.28)",
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
          transform: "translateY(-1px)",
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
          transform: "translateY(-1px)",
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
