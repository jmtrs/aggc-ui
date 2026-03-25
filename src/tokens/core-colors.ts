/**
 * Core semantic color tokens — shared between desktop and web consumers.
 *
 * These tokens cover the universal design language: text, backgrounds,
 * borders and badge indicators. Any app that uses @aggc/ui can rely on these.
 */
export const coreColorTokens = {
  text: {
    primary: { value: { base: "#0f1728", _dark: "#f7f9fd" } },
    secondary: { value: { base: "#405069", _dark: "#c8d1e0" } },
    muted: { value: { base: "#61708a", _dark: "#96a3b8" } },
    accent: { value: { base: "#315eff", _dark: "#8ab4ff" } },
    inverse: { value: { base: "#ffffff", _dark: "#08111f" } },
    error: { value: { base: "#d92d20", _dark: "#ff8e7f" } },
  },
  bg: {
    canvas: { value: { base: "rgba(244, 248, 255, 0.8)", _dark: "rgba(0, 0, 0, 0.94)" } },
    card: { value: { base: "rgba(255, 255, 255, 0.62)", _dark: "rgba(0, 0, 0, 0.82)" } },
    cardStrong: { value: { base: "rgba(255, 255, 255, 0.78)", _dark: "rgba(7, 10, 15, 0.98)" } },
    cardAlt: { value: { base: "rgba(248, 251, 255, 0.56)", _dark: "rgba(10, 13, 19, 0.94)" } },
    sidebar: { value: { base: "rgba(251, 253, 255, 0.68)", _dark: "rgba(0, 0, 0, 0.9)" } },
    overlay: { value: { base: "rgba(255, 255, 255, 0.42)", _dark: "rgba(255, 255, 255, 0.02)" } },
    input: { value: { base: "rgba(255, 255, 255, 0.72)", _dark: "rgba(12, 16, 23, 0.98)" } },
    selected: { value: { base: "rgba(60, 111, 255, 0.12)", _dark: "rgba(138, 180, 255, 0.16)" } },
    hover: { value: { base: "rgba(49, 71, 115, 0.08)", _dark: "rgba(255, 255, 255, 0.06)" } },
    buttonOutline: { value: { base: "rgba(255, 255, 255, 0.48)", _dark: "rgba(14, 18, 26, 0.98)" } },
    header: { value: { base: "rgba(250, 252, 255, 0.58)", _dark: "rgba(0, 0, 0, 0.84)" } },
    menu: { value: { base: "rgba(255, 255, 255, 0.9)", _dark: "rgba(9, 12, 18, 0.99)" } },
    accentSoft: { value: { base: "rgba(49, 94, 255, 0.1)", _dark: "rgba(138, 180, 255, 0.18)" } },
    accentStrong: { value: { base: "rgba(49, 94, 255, 0.86)", _dark: "rgba(122, 170, 255, 0.82)" } },
  },
  border: {
    soft: { value: { base: "rgba(148, 163, 184, 0.14)", _dark: "rgba(255, 255, 255, 0.035)" } },
    subtle: { value: { base: "rgba(125, 146, 182, 0.2)", _dark: "rgba(255, 255, 255, 0.09)" } },
    default: { value: { base: "rgba(109, 130, 164, 0.28)", _dark: "rgba(255, 255, 255, 0.14)" } },
    strong: { value: { base: "rgba(80, 98, 127, 0.42)", _dark: "rgba(255, 255, 255, 0.22)" } },
    accent: { value: { base: "rgba(82, 121, 255, 0.5)", _dark: "rgba(125, 171, 255, 0.44)" } },
  },
  badge: {
    successBg: { value: { base: "rgba(19, 163, 74, 0.12)", _dark: "rgba(19, 80, 58, 0.7)" } },
    successText: { value: { base: "#136c45", _dark: "#7ff2c7" } },
    successBorder: { value: { base: "rgba(21, 128, 61, 0.22)", _dark: "rgba(127, 242, 199, 0.32)" } },
    warningBg: { value: { base: "rgba(245, 158, 11, 0.12)", _dark: "rgba(89, 58, 8, 0.76)" } },
    warningText: { value: { base: "#9a5b05", _dark: "#ffd36b" } },
    warningBorder: { value: { base: "rgba(217, 119, 6, 0.22)", _dark: "rgba(255, 211, 107, 0.32)" } },
    infoBg: { value: { base: "rgba(59, 130, 246, 0.11)", _dark: "rgba(24, 48, 92, 0.82)" } },
    infoText: { value: { base: "#2459d8", _dark: "#9ac1ff" } },
    infoBorder: { value: { base: "rgba(37, 99, 235, 0.2)", _dark: "rgba(154, 193, 255, 0.3)" } },
    neutralBg: { value: { base: "rgba(99, 115, 148, 0.08)", _dark: "rgba(21, 26, 35, 0.92)" } },
    neutralText: { value: { base: "#4b5d7a", _dark: "#d0d7e4" } },
    neutralBorder: { value: { base: "rgba(109, 130, 164, 0.18)", _dark: "rgba(183, 195, 215, 0.22)" } },
  },
} as const;
