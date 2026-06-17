import { cva } from "@styled/css";

export const skeletonClass = cva({
  base: {
    position: "relative",
    overflow: "hidden",
    bg: "bg.cardAlt",
    borderRadius: "md",
    _before: {
      content: "\"\"",
      position: "absolute",
      inset: "0",
      background:
        "linear-gradient(90deg, transparent 0%, var(--colors-bg-overlay, rgba(255,255,255,0.36)) 50%, transparent 100%)",
      transform: "translateX(-100%)",
      animation: "aggc-shimmer 1.6s cubic-bezier(0.25, 0.1, 0.25, 1) infinite",
    },
    _dark: {
      bg: "rgba(255, 255, 255, 0.04)",
      _before: {
        background:
          "linear-gradient(90deg, transparent 0%, rgba(186, 204, 236, 0.1) 50%, transparent 100%)",
      },
    },
  },
  variants: {
    variant: {
      text: {
        width: "100%",
        height: "0.875rem",
      },
      title: {
        width: "100%",
        height: "1.75rem",
        borderRadius: "md",
      },
      rect: {
        width: "100%",
        height: "5rem",
      },
      pill: {
        width: "5rem",
        height: "1.75rem",
        borderRadius: "999px",
      },
      circle: {
        width: "2.75rem",
        height: "2.75rem",
        borderRadius: "999px",
      },
      stat: {
        width: "100%",
        height: "4.75rem",
      },
      action: {
        width: "100%",
        height: "2.75rem",
      },
    },
  },
  defaultVariants: {
    variant: "rect",
  },
});
