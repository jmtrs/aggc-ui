import { css } from "@styled/css";

export const pageRootClass = css({
  width: "100%",
  display: "grid",
  gap: "5",
  alignContent: "start",
  height: "100%",
  minHeight: "0",
  overflow: "hidden",
  minWidth: "0",
});

export const pageScrollRegionClass = css({
  display: "grid",
  gap: "4",
  height: "100%",
  minHeight: "0",
  overflowY: "auto",
  paddingRight: "1",
  alignContent: "start",
});
