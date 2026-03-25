import { css } from "@styled/css";
import { eyebrowClass, helperTextClass } from "../styles";

export const uiFieldRootClass = css({
  display: "grid",
  gap: "2",
  minWidth: "0",
});

export const uiFieldTopRowClass = css({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "3",
});

export const uiFieldLabelWrapClass = css({
  display: "grid",
  gap: "1",
  minWidth: "0",
});

export const uiFieldEyebrowClass = eyebrowClass;

export const uiFieldLabelClass = css({
  fontSize: "sm",
  fontWeight: "700",
  color: "text.primary",
});

export const uiFieldHintClass = helperTextClass;

export const uiFieldMetaClass = css({
  flexShrink: "0",
});
