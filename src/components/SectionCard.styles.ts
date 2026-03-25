import { css } from "@styled/css";
import {
  pageHeaderActionsClass,
  pageHeaderContentClass,
  pageHeaderRootClass,
  sectionTitleClass,
  surfacePanelClass,
  eyebrowClass,
} from "../styles";

export const sectionCardClass = css({
  padding: "6",
});

export const sectionCardScrollClass = css({
  height: "100%",
  minHeight: "0",
  display: "grid",
  gridTemplateRows: "auto minmax(0, 1fr)",
});

export const sectionCardSurfaceClass = surfacePanelClass;

export const sectionCardHeaderClass = pageHeaderRootClass;

export const sectionCardHeaderWithGapClass = css({
  position: "relative",
  zIndex: "1",
  mb: "5",
});

export const sectionCardHeaderCollapsedGapClass = css({
  position: "relative",
  zIndex: "1",
  mb: "0",
});

export const sectionCardHeaderContentClass = pageHeaderContentClass;

export const sectionCardEyebrowClass = eyebrowClass;

export const sectionCardTitleClass = sectionTitleClass;

export const sectionCardDescriptionClass = css({
  color: "text.secondary",
  lineHeight: "1.65",
  fontSize: "sm",
  maxWidth: "2xl",
});

export const sectionCardActionsClass = pageHeaderActionsClass;

export const sectionCardBodyScrollClass = css({
  position: "relative",
  zIndex: "1",
  minHeight: "0",
  overflowY: "auto",
  paddingRight: "1",
  overscrollBehavior: "contain",
});

export const sectionCardBodyStaticClass = css({
  position: "relative",
  zIndex: "1",
});
