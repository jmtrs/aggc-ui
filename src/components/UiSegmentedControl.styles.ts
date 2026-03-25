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
  backdropFilter: "blur(18px) saturate(140%)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
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
    transition: "all 160ms ease",
  },
  variants: {
    active: {
      true: {
        borderColor: "border.accent",
        bg: "bg.accentStrong",
        color: "text.inverse",
        boxShadow: "0 14px 26px -16px rgba(49,94,255,0.68)",
        _hover: {
          bg: "bg.accentStrong",
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
