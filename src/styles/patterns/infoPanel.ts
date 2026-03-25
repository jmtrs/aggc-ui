import { css, cx } from "@styled/css";

import { insetPanelClass } from "../primitives/surfaces";

export const infoPanelClass = cx(
  insetPanelClass,
  css({
    padding: "4",
    display: "grid",
    gap: "3",
  })
);

export const resultSkeletonPanelClass = cx(
  insetPanelClass,
  css({
    minHeight: "220px",
    padding: "4",
    display: "grid",
    gap: "3",
  })
);
