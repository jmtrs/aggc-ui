import { css } from "@styled/css";

export const pageHeaderRootClass = css({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "4",
  flexDirection: { base: "column", md: "row" },
});

export const pageHeaderContentClass = css({
  display: "grid",
  gap: "2",
  minWidth: "0",
});

export const pageHeaderActionsClass = css({
  flexShrink: "0",
});
