import { cva, css } from "@styled/css";

export const segmentedControlContainerClass = css({
  display: "inline-flex",
  width: "fit-content",
  borderRadius: "full",
  borderWidth: "1px",
  borderColor: "border.default",
  bg: "bg.input",
  padding: "1",
  gap: "1",
  _dark: {
    borderColor: "border.strong",
  },
});

export const segmentedControlOptionClass = cva({
  base: {
    borderRadius: "full",
    px: "3.5",
    py: "2",
    fontSize: "sm",
    fontWeight: "600",
    cursor: "pointer",
    borderWidth: "1px",
    transition: "background-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), border-color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), color 160ms cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 160ms cubic-bezier(0.25, 0.1, 0.25, 1)",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "text.accent",
      outlineOffset: "2px",
    },
  },
  variants: {
    active: {
      true: {
        borderColor: "border.accent",
        bg: "bg.accentStrong",
        color: "text.inverse",
        _hover: {
          bg: "bg.accentStrong",
        },
        _dark: {
          bg: "rgba(138, 180, 255, 0.2)",
          color: "text.accent",
          borderColor: "border.accent",
        },
      },
      false: {
        borderColor: "transparent",
        bg: "transparent",
        color: "text.secondary",
        boxShadow: "none",
        _hover: {
          bg: "bg.hover",
        },
      },
    },
  },
});
