import { css } from "@styled/css";
import { buttonRecipe } from "../styles";

// buttonRecipe is the source of truth — UiButton uses it directly.
export const uiButtonClass = buttonRecipe;

export const uiButtonContentClass = css({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2",
  minWidth: "0",
});

export const uiButtonHiddenContentClass = css({
  visibility: "hidden",
});

export const uiButtonBusyContentClass = css({
  position: "absolute",
  inset: "0",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "2",
  px: "4",
  py: "3",
  pointerEvents: "none",
});
