import { cva } from "@styled/css";

export const skeletonClass = cva({
  base: {
    position: "relative",
    overflow: "hidden",
    _before: {
      content: "\"\"",
      position: "absolute",
      inset: "0",
      background:
        "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.62) 50%, rgba(255,255,255,0) 100%)",
      transform: "translateX(-100%)",
      animation: "aggc-shimmer 1.45s ease-in-out infinite",
    },
    _dark: {
      _before: {
        background:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(186,204,236,0.22) 50%, rgba(255,255,255,0) 100%)",
      },
    },
  },
  variants: {
    variant: {
      text: {
        width: "100%",
        height: "0.875rem",
        borderRadius: "md",
        bg: "rgba(127, 146, 184, 0.14)",
        _dark: {
          bg: "rgba(210, 220, 240, 0.09)",
        },
      },
      title: {
        width: "100%",
        height: "1.75rem",
        borderRadius: "xl",
        bg: "rgba(127, 146, 184, 0.14)",
        _dark: {
          bg: "rgba(210, 220, 240, 0.09)",
        },
      },
      rect: {
        width: "100%",
        height: "5rem",
        borderRadius: "xl",
        bg: "rgba(127, 146, 184, 0.14)",
        _dark: {
          bg: "rgba(210, 220, 240, 0.09)",
        },
      },
      pill: {
        width: "5rem",
        height: "1.75rem",
        borderRadius: "999px",
        bg: "rgba(127, 146, 184, 0.14)",
        _dark: {
          bg: "rgba(210, 220, 240, 0.09)",
        },
      },
      circle: {
        width: "2.75rem",
        height: "2.75rem",
        borderRadius: "999px",
        bg: "rgba(127, 146, 184, 0.14)",
        _dark: {
          bg: "rgba(210, 220, 240, 0.09)",
        },
      },
      stat: {
        width: "100%",
        height: "4.75rem",
        borderRadius: "xl",
        bg: "rgba(117, 138, 178, 0.16)",
        _dark: {
          bg: "rgba(210, 220, 240, 0.11)",
        },
      },
      action: {
        width: "100%",
        height: "2.75rem",
        borderRadius: "xl",
        bg: "rgba(127, 146, 184, 0.14)",
        _dark: {
          bg: "rgba(210, 220, 240, 0.09)",
        },
      },
    },
  },
  defaultVariants: {
    variant: "rect",
  },
});
