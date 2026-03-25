import { css } from "@styled/css";

export const selectableListDetailRootClass = css({
  display: "grid",
  gap: "4",
  gridTemplateColumns: { base: "1fr", xl: "minmax(18rem, 0.9fr) minmax(0, 1.4fr)" },
  alignItems: "start",
});

export const selectableListClass = css({
  display: "grid",
  gap: "2",
  alignContent: "start",
  minWidth: "0",
});

export const selectableDetailClass = css({
  display: "grid",
  gap: "4",
  minWidth: "0",
});
