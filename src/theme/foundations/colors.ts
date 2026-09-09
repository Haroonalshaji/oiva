/** Brand palette — wine #3E1214 + peach #F6C8A3 */
export const oivaColors = {
  ivory: "#F6C8A3",
  pearl: "#FAE0C8",
  champagne: "#E8B88A",
  beige: "#E5B890",
  blush: "#F0C9A8",
  gold: "#F6C8A3",
  taupe: "#9A6B5C",
  rose: "#C48A72",
  cocoa: "#3E1214",
  cocoaDeep: "#2A0C0E",
  ink: "#3E1214",
  hairline: "#D4A888",
} as const;

export type OivaColor = keyof typeof oivaColors;
