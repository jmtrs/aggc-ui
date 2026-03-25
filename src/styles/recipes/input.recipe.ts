import { cva } from "@styled/css";

export const inputRecipe = cva({
  base: {
    width: "100%",
    borderWidth: "1px",
    borderColor: "border.default",
    bg: "bg.input",
    color: "text.primary",
    fontSize: "sm",
    backdropFilter: "blur(22px) saturate(145%)",
    transition: "border-color 160ms ease, background 160ms ease",
    _placeholder: {
      color: "text.muted",
    },
    _hover: {
      borderColor: "border.strong",
    },
    _dark: {
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
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
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
      },
      md: {
        minHeight: "48px",
        borderRadius: "xl",
        px: "4",
        py: "3",
        lineHeight: "1.5",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.24), 0 14px 28px -28px rgba(15,23,42,0.42)",
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
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.24), 0 18px 36px -32px rgba(15,23,42,0.42)",
      },
    },
  },
  defaultVariants: {
    size: "md",
    kind: "input",
  },
});
