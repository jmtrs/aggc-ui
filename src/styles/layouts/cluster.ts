import { cva } from "@styled/css";

export const clusterLayout = cva({
  base: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    minWidth: "0",
  },
  variants: {
    gap: {
      xs: { gap: "1" },
      sm: { gap: "2" },
      md: { gap: "3" },
      lg: { gap: "4" },
    },
    justify: {
      start: { justifyContent: "flex-start" },
      between: { justifyContent: "space-between" },
      end: { justifyContent: "flex-end" },
    },
  },
  defaultVariants: {
    gap: "sm",
    justify: "start",
  },
});
