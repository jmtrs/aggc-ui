import { cva } from "@styled/css";

export const dropdownRecipe = cva({
  base: {
    borderWidth: "1px",
    borderColor: "border.subtle",
    bg: "bg.menu",
    backdropFilter: "blur(34px) saturate(165%)",
    boxShadow: "0 32px 70px -40px rgba(15,23,42,0.5)",
  },
  variants: {
    placement: {
      anchored: {
        position: "absolute",
        top: "calc(100% + 10px)",
        left: "0",
        right: "0",
      },
      floating: {
        position: "fixed",
      },
    },
    density: {
      cozy: {
        borderRadius: "2xl",
        p: "2",
        gap: "1",
      },
      compact: {
        borderRadius: "xl",
        p: "1.5",
        gap: "0.5",
      },
    },
  },
  defaultVariants: {
    placement: "anchored",
    density: "cozy",
  },
});
