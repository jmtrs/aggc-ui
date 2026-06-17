export const motionTokens = {
  durations: {
    fast: { value: "100ms" },
    moderate: { value: "160ms" },
    emphasized: { value: "240ms" },
    slow: { value: "320ms" },
  },
  easings: {
    default: { value: "cubic-bezier(0.25, 0.1, 0.25, 1)" },
    out: { value: "cubic-bezier(0.16, 1, 0.3, 1)" },
    inOut: { value: "cubic-bezier(0.45, 0, 0.55, 1)" },
    spring: { value: "cubic-bezier(0.34, 1.56, 0.64, 1)" },
  },
} as const;
