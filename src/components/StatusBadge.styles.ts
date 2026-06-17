import { cva } from "@styled/css";

export const statusBadgeClass = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "full",
    borderWidth: "1px",
    px: "2.5",
    py: "1",
    fontSize: "xs",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    lineHeight: "1",
    whiteSpace: "nowrap",
  },
  variants: {
    tone: {
      success: {
        bg: "badge.successBg",
        color: "badge.successText",
        borderColor: "badge.successBorder",
      },
      warning: {
        bg: "badge.warningBg",
        color: "badge.warningText",
        borderColor: "badge.warningBorder",
      },
      info: {
        bg: "badge.infoBg",
        color: "badge.infoText",
        borderColor: "badge.infoBorder",
      },
      neutral: {
        bg: "badge.neutralBg",
        color: "badge.neutralText",
        borderColor: "badge.neutralBorder",
      },
      danger: {
        bg: "badge.dangerBg",
        color: "badge.dangerText",
        borderColor: "badge.dangerBorder",
      },
    },
  },
  defaultVariants: {
    tone: "neutral",
  },
});
