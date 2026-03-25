import { css, cx } from "@styled/css";

import { insetPanelClass } from "../primitives/surfaces";
import { helperTextClass } from "../primitives/typography";

export const emptyStatePanelClass = cx(
  insetPanelClass,
  helperTextClass,
  css({
    display: "grid",
    gap: "2",
    padding: "4",
    lineHeight: "1.7",
  })
);

export const centeredEmptyStatePanelClass = cx(
  emptyStatePanelClass,
  css({
    alignContent: "center",
    minHeight: "220px",
  })
);
