import { cva, css } from "@styled/css";

export const uiCheckboxRootClass = cva({
  base: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    gap: "3",
    textAlign: "left",
    borderRadius: "2xl",
    borderWidth: "1px",
    px: "4",
    py: "3.5",
    color: "text.primary",
    transition: "all 160ms ease",
  },
  variants: {
    checked: {
      true: {
        borderColor: "border.accent",
        bg: "bg.selected",
        boxShadow: "0 18px 40px -30px rgba(49,94,255,0.56)",
      },
      false: {
        borderColor: "border.default",
        bg: "bg.input",
        boxShadow: "0 14px 32px -30px rgba(15,23,42,0.42)",
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
  },
  compoundVariants: [
    {
      checked: true,
      disabled: false,
      css: {
        _hover: {
          borderColor: "border.accent",
          transform: "translateY(-1px)",
        },
      },
    },
    {
      checked: false,
      disabled: false,
      css: {
        _hover: {
          borderColor: "border.strong",
          transform: "translateY(-1px)",
        },
      },
    },
  ],
  defaultVariants: {
    checked: false,
    disabled: false,
  },
});

export const uiCheckboxIndicatorClass = cva({
  base: {
    mt: "0.5",
    flexShrink: "0",
    width: "22px",
    height: "22px",
    borderRadius: "md",
    borderWidth: "1px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 160ms ease",
  },
  variants: {
    checked: {
      true: {
        borderColor: "border.accent",
        bg: "bg.accentStrong",
        color: "text.inverse",
        boxShadow: "0 12px 24px -16px rgba(49,94,255,0.7)",
      },
      false: {
        borderColor: "border.default",
        bg: "bg.buttonOutline",
        color: "transparent",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.32)",
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});

export const uiCheckboxContentClass = css({
  display: "grid",
  gap: "1",
  minWidth: "0",
});

export const uiCheckboxLabelClass = css({
  fontSize: "sm",
  fontWeight: "700",
  lineHeight: "1.45",
});

export const uiCheckboxDescriptionClass = css({
  color: "text.secondary",
  fontSize: "sm",
  lineHeight: "1.55",
});
