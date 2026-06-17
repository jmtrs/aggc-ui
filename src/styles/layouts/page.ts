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
  scrollbarWidth: "thin",
  scrollbarColor: "rgba(148, 163, 184, 0.3) transparent",
  _dark: {
    scrollbarColor: "rgba(255, 255, 255, 0.12) transparent",
  },
});
