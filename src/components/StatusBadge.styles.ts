import { cva } from "@styled/css";

export const statusBadgeClass = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "full",
    borderWidth: "1px",
    px: "3",
    py: "1.5",
    fontSize: "xs",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    backdropFilter: "blur(16px) saturate(140%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.16)",
    _dark: {
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
    },
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
    },
  },
  defaultVariants: {
    tone: "neutral",
  },
});
