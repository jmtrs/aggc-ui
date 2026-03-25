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
        opacity: 0.5,
      },
    },
  },
  defaultVariants: {
    variant: "solid",
    disabled: false,
    loading: false,
  },
});
