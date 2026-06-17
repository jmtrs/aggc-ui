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
  transition: "border-color 160ms ease, background-color 160ms ease, box-shadow 160ms ease",
  _hover: {
    borderColor: "border.strong",
  },
  _placeholder: {
    color: "text.muted",
  },
  _focusVisible: {
    outline: "none",
    borderColor: "border.accent",
    boxShadow: "0 0 0 3px rgba(82, 121, 255, 0.18)",
  },
  _dark: {
    borderColor: "border.strong",
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
  transition: "border-color 160ms ease, background-color 160ms ease",
  _hover: {
    borderColor: "border.strong",
  },
  _placeholder: {
    color: "text.muted",
  },
  _focusVisible: {
    outline: "none",
    borderColor: "border.accent",
    boxShadow: "0 0 0 3px rgba(82, 121, 255, 0.18)",
  },
  _dark: {
    borderColor: "border.strong",
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
  transition: "border-color 160ms ease, background-color 160ms ease",
  _hover: {
    borderColor: "border.strong",
  },
  _focusVisible: {
    outline: "none",
    borderColor: "border.accent",
    boxShadow: "0 0 0 3px rgba(82, 121, 255, 0.18)",
  },
  _dark: {
    borderColor: "border.strong",
  },
});
