import { cva } from "@styled/css";

export const inputRecipe = cva({
  base: {
    width: "100%",
    borderWidth: "1px",
    borderColor: "border.default",
    bg: "bg.input",
    color: "text.primary",
    fontSize: "sm",
    _placeholder: {
      color: "text.muted",
    },
    _hover: {
      borderColor: "border.strong",
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
