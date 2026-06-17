import { cva, css } from "@styled/css";

export const uiCheckboxRootClass = cva({
  base: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    gap: "3",
    textAlign: "left",
    borderRadius: "xl",
    borderWidth: "1px",
    px: "4",
    py: "3.5",
    color: "text.primary",
    transition: "border-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), background-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 160ms cubic-bezier(0.25, 0.1, 0.25, 1)",
  },
  variants: {
    checked: {
      true: {
        borderColor: "border.accent",
        bg: "bg.selected",
      },
      false: {
        borderColor: "border.default",
        bg: "bg.input",
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
  },
  compoundVariants: [
    {
      checked: true,
      disabled: false,
      css: {
        _hover: {
          borderColor: "border.accent",
        },
      },
    },
    {
      checked: false,
      disabled: false,
      css: {
        _hover: {
          borderColor: "border.strong",
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
    borderWidth: "1.5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "border-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), background-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), transform 160ms cubic-bezier(0.25, 0.1, 0.25, 1)",
  },
  variants: {
    checked: {
      true: {
        borderColor: "border.accent",
        bg: "bg.accentStrong",
        color: "text.inverse",
        transform: "scale(1)",
      },
      false: {
        borderColor: "border.default",
        bg: "bg.buttonOutline",
        color: "transparent",
        transform: "scale(1)",
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
