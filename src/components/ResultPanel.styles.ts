import { cva, css, cx } from "@styled/css";

import { surfacePanelClass } from "../styles";

export const resultPanelClass = cva({
  base: {
    borderWidth: "1px",
    padding: "5",
  },
  variants: {
    ok: {
      true: {
        borderColor: "result.okBorder",
        bg: "result.okBg",
      },
      false: {
        borderColor: "result.failBorder",
        bg: "result.failBg",
      },
    },
  },
});

export const resultPanelRootClass = (ok: boolean) => cx(surfacePanelClass, resultPanelClass({ ok }));

export const resultPanelHeaderClass = css({
  display: "flex",
  justifyContent: "space-between",
  gap: "4",
  alignItems: { base: "flex-start", md: "center" },
  flexDirection: { base: "column", md: "row" },
  mb: "3",
});

export const resultPanelSummaryClass = css({
  display: "flex",
  alignItems: "center",
  gap: "3",
});

export const resultPanelIconClass = cva({
  base: {
    width: "10",
    height: "10",
    borderRadius: "full",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  variants: {
    ok: {
      true: {
        bg: "bg.accentSoft",
        color: "text.accent",
      },
      false: {
        bg: "badge.warningBg",
        color: "badge.warningText",
      },
    },
  },
});

export const resultPanelTitleClass = css({
  fontSize: "lg",
  fontWeight: "700",
  color: "text.primary",
});

export const resultPanelSectionClass = cva({
  base: {},
  variants: {
    spaced: {
      true: { mb: "3" },
      false: { mb: "0" },
    },
  },
});

export const resultPanelSectionTitleClass = cva({
  base: {
    fontSize: "sm",
    fontWeight: "700",
    mb: "2",
  },
  variants: {
    tone: {
      detail: { color: "result.detailText" },
      warning: { color: "result.warningLabel" },
      error: { color: "result.errorLabel" },
    },
  },
});

export const resultPanelListClass = cva({
  base: {
    display: "grid",
    gap: "1.5",
    pl: "4",
  },
  variants: {
    tone: {
      detail: { color: "result.bodyText" },
      warning: { color: "result.warningBody" },
      error: { color: "result.errorBody" },
    },
  },
});
