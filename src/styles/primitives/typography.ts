import { css } from "@styled/css";

export const eyebrowClass = css({
  fontSize: "xs",
  textTransform: "uppercase",
  letterSpacing: "0.12em",
  color: "text.muted",
  fontWeight: "700",
});

export const sectionTitleClass = css({
  fontFamily: "heading",
  fontSize: { base: "2xl", md: "3xl" },
  lineHeight: "1",
  color: "text.primary",
});

export const sectionDescriptionClass = css({
  color: "text.secondary",
  lineHeight: "1.65",
  fontSize: "sm",
});

export const helperTextClass = css({
  color: "text.secondary",
  fontSize: "sm",
  lineHeight: "1.6",
});

export const metricValueClass = css({
  color: "text.primary",
  fontWeight: "700",
  lineHeight: "1.1",
});

export const codeBlockClass = css({
  whiteSpace: "pre-wrap",
  fontFamily: "mono",
  fontSize: "sm",
  lineHeight: "1.65",
  color: "text.secondary",
});
