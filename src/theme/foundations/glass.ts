/** Shared glassmorphism layer styles — use via `layerStyle="glassLight"` etc. */
export const glassLayerStyles = {
  glassLight: {
    bg: "rgba(246, 200, 163, 0.72)",
    backdropFilter: "blur(18px) saturate(140%)",
    WebkitBackdropFilter: "blur(18px) saturate(140%)",
    border: "1px solid rgba(246, 200, 163, 0.55)",
    boxShadow: "0 8px 32px rgba(62, 18, 20, 0.1)",
  },
  glassDark: {
    bg: "rgba(62, 18, 20, 0.42)",
    backdropFilter: "blur(22px) saturate(120%)",
    WebkitBackdropFilter: "blur(22px) saturate(120%)",
    border: "1px solid rgba(246, 200, 163, 0.18)",
    boxShadow: "0 16px 48px rgba(0, 0, 0, 0.28)",
  },
  glassPanel: {
    bg: "rgba(250, 224, 200, 0.55)",
    backdropFilter: "blur(16px) saturate(135%)",
    WebkitBackdropFilter: "blur(16px) saturate(135%)",
    border: "1px solid rgba(246, 200, 163, 0.65)",
    borderRadius: "2px",
    boxShadow: "0 4px 28px rgba(62, 18, 20, 0.08)",
  },
  glassField: {
    bg: "rgba(250, 224, 200, 0.55)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "1px solid rgba(246, 200, 163, 0.75)",
  },
} as const;

export const heroOverlays = {
  gradient:
    "linear-gradient(to top, rgba(62,18,20,0.78) 0%, rgba(62,18,20,0.42) 45%, rgba(62,18,20,0.18) 100%)",
  goldWash:
    "linear-gradient(135deg, rgba(246,200,163,0.28) 0%, rgba(62,18,20,0.08) 55%, rgba(62,18,20,0.32) 100%)",
  vignette:
    "radial-gradient(ellipse at 50% 85%, rgba(62,18,20,0.58) 0%, transparent 62%)",
} as const;
