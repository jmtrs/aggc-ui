import { cva } from "@styled/css";

export const stackLayout = cva({
  base: {
    display: "grid",
    alignContent: "start",
    minWidth: "0",
  },
  variants: {
    gap: {
      xs: { gap: "1" },
      sm: { gap: "2" },
      md: { gap: "3" },
      lg: { gap: "4" },
      xl: { gap: "5" },
    },
  },
  defaultVariants: {
    gap: "md",
  },
});
