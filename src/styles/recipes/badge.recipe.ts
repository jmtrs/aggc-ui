import { cva } from "@styled/css";

export const badgeRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    gap: "1.5",
    borderRadius: "full",
    borderWidth: "1px",
    px: "3",
    py: "2",
    fontSize: "sm",
    fontWeight: "600",
    lineHeight: "1",
    whiteSpace: "nowrap",
    backdropFilter: "blur(16px) saturate(140%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.16)",
    _dark: {
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
    },
  },
  variants: {
    tone: {
      neutral: {
        borderColor: "badge.neutralBorder",
        bg: "badge.neutralBg",
        color: "badge.neutralText",
      },
      info: {
        borderColor: "badge.infoBorder",
        bg: "badge.infoBg",
        color: "badge.infoText",
      },
      success: {
        borderColor: "badge.successBorder",
        bg: "badge.successBg",
        color: "badge.successText",
      },
      warning: {
        borderColor: "badge.warningBorder",
        bg: "badge.warningBg",
        color: "badge.warningText",
      },
    },
    size: {
      sm: { px: "2.5", py: "1.5", fontSize: "xs" },
      md: {},
    },
  },
  defaultVariants: {
    tone: "neutral",
    size: "md",
  },
});
