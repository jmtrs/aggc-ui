import { cva } from "@styled/css";

export const buttonRecipe = cva({
  base: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    borderRadius: "lg",
    fontSize: "sm",
    fontWeight: "600",
    letterSpacing: "0.005em",
    transition: "background-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), border-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 160ms cubic-bezier(0.25, 0.1, 0.25, 1), opacity 160ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 160ms cubic-bezier(0.25, 0.1, 0.25, 1)",
    userSelect: "none",
    whiteSpace: "nowrap",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "text.accent",
      outlineOffset: "2px",
    },
  },
  variants: {
    variant: {
      solid: {
        bg: "text.accent",
        color: "text.inverse",
        borderWidth: "1px",
        borderColor: "transparent",
        _dark: {
          color: "text.inverse",
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
    size: {
      sm: {
        px: "3",
        py: "1.5",
        fontSize: "xs",
        borderRadius: "md",
      },
      md: {
        px: "4",
        py: "2.5",
      },
      lg: {
        px: "5",
        py: "3",
        fontSize: "md",
        borderRadius: "xl",
      },
    },
    tone: {
      default: {},
      danger: {
        bg: "text.error",
        color: "text.inverse",
        borderWidth: "1px",
        borderColor: "transparent",
        _dark: {
          color: "text.inverse",
        },
      },
    },
    disabled: {
      true: {
        cursor: "not-allowed",
        opacity: 0.45,
      },
      false: {
        cursor: "pointer",
      },
    },
    loading: {
      true: {
        cursor: "not-allowed",
        opacity: 0.45,
      },
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      tone: "default",
      disabled: false,
      loading: false,
      css: {
        _hover: {
          bg: "text.accent",
          boxShadow: "0 2px 8px -2px rgba(49, 94, 255, 0.4)",
          _dark: {
            boxShadow: "0 2px 8px -2px rgba(138, 180, 255, 0.3)",
          },
        },
      },
    },
    {
      variant: "solid",
      tone: "danger",
      disabled: false,
      loading: false,
      css: {
        _hover: {
          bg: "text.error",
          boxShadow: "0 2px 8px -2px rgba(217, 45, 32, 0.4)",
          _dark: {
            boxShadow: "0 2px 8px -2px rgba(255, 142, 127, 0.3)",
          },
        },
      },
    },
    {
      variant: "outline",
      tone: "danger",
      disabled: false,
      loading: false,
      css: {
        color: "text.error",
        borderColor: "border.danger",
        bg: "transparent",
        _hover: {
          bg: "badge.dangerBg",
          borderColor: "text.error",
          color: "text.error",
        },
      },
    },
    {
      variant: "outline",
      tone: "default",
      disabled: false,
      loading: false,
      css: {
        _hover: {
          color: "text.primary",
          borderColor: "border.strong",
          bg: "bg.cardStrong",
          _dark: {
            bg: "rgba(255, 255, 255, 0.06)",
          },
        },
      },
    },
    {
      variant: "subtle",
      tone: "default",
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
    size: "md",
    tone: "default",
    disabled: false,
    loading: false,
  },
});
