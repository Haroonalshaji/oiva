export const oivaColors = {
  ivory: "#FBF6EE",
  pearl: "#FFFFFF",
  champagne: "#E8D9C0",
  beige: "#D9C7B3",
  blush: "#E4CFC2",
  taupe: "#A8927E",
  rose: "#B98D78",
  cocoa: "#4A382C",
  cocoaDeep: "#2E2119",
  ink: "#3A2E25",
  hairline: "#D8C9B8",
} as const;

export type OivaColor = keyof typeof oivaColors;
