import { css } from "@styled/css";

// Tooltip content floating panel. Positioned by reka-ui (floating-ui),
// so this only defines the visual surface.

export const tooltipContent = css({
  bg: "bg.menu",
  color: "text.primary",
  fontSize: "xs",
  fontWeight: "500",
  lineHeight: "1.4",
  px: "2.5",
  py: "1.5",
  borderRadius: "md",
  boxShadow:
    "0 4px 16px -4px rgba(15,23,42,0.08), 0 2px 6px -2px rgba(15,23,42,0.04)",
  zIndex: "70",
  maxWidth: "90",
  whiteSpace: "normal",
  wordBreak: "break-word",
  _dark: {
    boxShadow:
      "0 4px 16px -4px rgba(0,0,0,0.48), 0 2px 6px -2px rgba(0,0,0,0.28)",
  },
});
