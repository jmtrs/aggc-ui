/**
 * Desktop-only semantic color tokens.
 *
 * These tokens model concepts that only exist in the desktop app:
 * - result.*  — pass/fail result panels (sync results, validation output)
 * - nav.*     — sidebar navigation item states
 * - sync.*    — sync operation row statuses (generated, skipped, etc.)
 *
 * Web consumers should NOT import these. Use coreColorTokens instead.
 */
export const desktopColorTokens = {
  result: {
    okBg: { value: { base: "rgba(48, 113, 255, 0.1)", _dark: "rgba(17, 43, 86, 0.88)" } },
    okBorder: { value: { base: "rgba(49, 94, 255, 0.18)", _dark: "rgba(138, 180, 255, 0.24)" } },
    failBg: { value: { base: "rgba(217, 45, 32, 0.08)", _dark: "rgba(77, 17, 11, 0.86)" } },
    failBorder: { value: { base: "rgba(217, 45, 32, 0.16)", _dark: "rgba(255, 142, 127, 0.24)" } },
    detailText: { value: { base: "#11203b", _dark: "#edf3ff" } },
    bodyText: { value: { base: "#42526b", _dark: "#cad2e0" } },
    warningLabel: { value: { base: "#9a5b05", _dark: "#ffd36b" } },
    warningBody: { value: { base: "#865210", _dark: "#f8dd95" } },
    errorLabel: { value: { base: "#b42318", _dark: "#ff9d91" } },
    errorBody: { value: { base: "#8f2118", _dark: "#ffc2ba" } },
  },
  nav: {
    inactiveText: { value: { base: "#42526b", _dark: "#b7c3d7" } },
  },
  sync: {
    generatedBg: { value: { base: "rgba(48, 113, 255, 0.08)", _dark: "rgba(15, 40, 84, 0.88)" } },
    generatedBorder: { value: { base: "rgba(49, 94, 255, 0.16)", _dark: "rgba(138, 180, 255, 0.24)" } },
    generatedLabel: { value: { base: "#2459d8", _dark: "#9ac1ff" } },
    generatedBody: { value: { base: "#264170", _dark: "#d7e5ff" } },
    skippedBg: { value: { base: "rgba(82, 102, 133, 0.06)", _dark: "rgba(14, 18, 24, 0.94)" } },
    skippedBorder: { value: { base: "rgba(109, 130, 164, 0.16)", _dark: "rgba(183, 195, 215, 0.18)" } },
    skippedLabel: { value: { base: "#42526b", _dark: "#b7c3d7" } },
    skippedBody: { value: { base: "#566883", _dark: "#c3cedf" } },
  },
} as const;
