import { cva } from "@styled/css";

export const splitLayout = cva({
  base: {
    display: "grid",
    gap: "4",
    alignItems: "start",
    minWidth: "0",
  },
  variants: {
    ratio: {
      equal: {
        gridTemplateColumns: { base: "1fr", xl: "repeat(2, minmax(0, 1fr))" },
      },
      sidebar: {
        gridTemplateColumns: { base: "1fr", xl: "minmax(18rem, 0.9fr) minmax(0, 1.4fr)" },
      },
      detail: {
        gridTemplateColumns: { base: "1fr", xl: "minmax(18rem, 0.85fr) minmax(0, 1.45fr)" },
      },
    },
  },
  defaultVariants: {
    ratio: "equal",
  },
});
