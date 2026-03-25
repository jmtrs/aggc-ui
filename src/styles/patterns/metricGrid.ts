import { cva } from "@styled/css";

export const metricGridPattern = cva({
  base: {
    display: "grid",
    gap: "4",
    minWidth: "0",
  },
  variants: {
    columns: {
      two: { gridTemplateColumns: { base: "1fr", md: "repeat(2, minmax(0, 1fr))" } },
      three: { gridTemplateColumns: { base: "1fr", lg: "repeat(3, minmax(0, 1fr))" } },
      four: { gridTemplateColumns: { base: "1fr", lg: "repeat(4, minmax(0, 1fr))" } },
    },
  },
  defaultVariants: {
    columns: "two",
  },
});
