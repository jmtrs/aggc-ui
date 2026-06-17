import { cva } from "@styled/css";

export const inputRecipe = cva({
  base: {
    width: "100%",
    borderWidth: "1px",
    borderColor: "border.default",
    bg: "bg.input",
    color: "text.primary",
    fontSize: "sm",
    transition: "border-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), background-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 160ms cubic-bezier(0.25, 0.1, 0.25, 1)",
    _placeholder: {
      color: "text.muted",
    },
    _hover: {
      borderColor: "border.strong",
    },
    _focusVisible: {
      outline: "none",
      borderColor: "border.accent",
      boxShadow: "0 0 0 3px var(--colors-bg-accentSoft, rgba(49, 94, 255, 0.12))",
    },
    _dark: {
      borderColor: "border.strong",
      _focusVisible: {
        boxShadow: "0 0 0 3px var(--colors-bg-accentSoft, rgba(138, 180, 255, 0.14))",
      },
    },
  },
  variants: {
    size: {
      sm: {
        minHeight: "40px",
        borderRadius: "lg",
        px: "3",
        py: "2.5",
        lineHeight: "1.45",
      },
      md: {
        minHeight: "48px",
        borderRadius: "xl",
        px: "4",
        py: "3",
        lineHeight: "1.5",
      },
    },
    kind: {
      input: {},
      textarea: {
        minHeight: "420px",
        borderRadius: "2xl",
        px: "4",
        py: "4",
        lineHeight: "1.6",
        fontFamily: "mono",
      },
    },
  },
  defaultVariants: {
    size: "md",
    kind: "input",
  },
});
