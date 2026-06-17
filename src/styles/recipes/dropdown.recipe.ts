import { cva } from "@styled/css";

export const dropdownRecipe = cva({
  base: {
    borderWidth: "1px",
    borderColor: "border.subtle",
    bg: "bg.menu",
    boxShadow: "0 4px 16px -4px rgba(15,23,42,0.1), 0 8px 24px -8px rgba(15,23,42,0.08), 0 1px 2px 0 rgba(15,23,42,0.04)",
    _dark: {
      borderColor: "border.default",
      boxShadow: "0 4px 16px -4px rgba(0,0,0,0.32), 0 8px 24px -8px rgba(0,0,0,0.24), 0 1px 2px 0 rgba(0,0,0,0.16)",
    },
  },
  variants: {
    placement: {
      anchored: {
        position: "absolute",
        top: "calc(100% + 6px)",
        left: "0",
        right: "0",
      },
      floating: {
        position: "fixed",
      },
    },
    density: {
      cozy: {
        borderRadius: "xl",
        p: "1.5",
        gap: "0.5",
      },
      compact: {
        borderRadius: "lg",
        p: "1",
        gap: "0.5",
      },
    },
  },
  defaultVariants: {
    placement: "anchored",
    density: "cozy",
  },
});
