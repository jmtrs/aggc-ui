import { css } from "@styled/css";

export const fieldControlClass = css({
  width: "100%",
  minHeight: "48px",
  borderRadius: "xl",
  borderWidth: "1px",
  borderColor: "border.default",
  bg: "bg.input",
  color: "text.primary",
  fontSize: "sm",
  lineHeight: "1.5",
  px: "4",
  py: "3",
  backdropFilter: "blur(22px) saturate(145%)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.24), 0 14px 28px -28px rgba(15,23,42,0.42)",
  transition: "border-color 160ms ease, background 160ms ease, transform 160ms ease",
  _hover: {
    borderColor: "border.strong",
  },
  _placeholder: {
    color: "text.muted",
  },
  _dark: {
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
  },
});

export const fieldControlSmClass = css({
  width: "100%",
  minHeight: "40px",
  borderRadius: "lg",
  borderWidth: "1px",
  borderColor: "border.default",
  bg: "bg.input",
  color: "text.primary",
  fontSize: "sm",
  lineHeight: "1.45",
  px: "3",
  py: "2.5",
  backdropFilter: "blur(20px) saturate(145%)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
  transition: "border-color 160ms ease, background 160ms ease",
  _hover: {
    borderColor: "border.strong",
  },
  _placeholder: {
    color: "text.muted",
  },
  _dark: {
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
  },
});

export const fieldTextareaClass = css({
  width: "100%",
  minHeight: "420px",
  borderRadius: "2xl",
  borderWidth: "1px",
  borderColor: "border.default",
  bg: "bg.input",
  color: "text.primary",
  fontFamily: "mono",
  fontSize: "sm",
  lineHeight: "1.6",
  px: "4",
  py: "4",
  backdropFilter: "blur(24px) saturate(145%)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.24), 0 18px 36px -32px rgba(15,23,42,0.42)",
  _hover: {
    borderColor: "border.strong",
  },
  _dark: {
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
  },
});
