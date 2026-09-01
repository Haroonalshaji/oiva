/** Shared glassmorphism layer styles — use via `layerStyle="glassLight"` etc. */
export const glassLayerStyles = {
  glassLight: {
    bg: "rgba(251, 246, 238, 0.62)",
    backdropFilter: "blur(18px) saturate(140%)",
    WebkitBackdropFilter: "blur(18px) saturate(140%)",
    border: "1px solid rgba(255, 255, 255, 0.55)",
    boxShadow: "0 8px 32px rgba(46, 33, 25, 0.07)",
  },
  glassDark: {
    bg: "rgba(46, 33, 25, 0.38)",
    backdropFilter: "blur(22px) saturate(120%)",
    WebkitBackdropFilter: "blur(22px) saturate(120%)",
    border: "1px solid rgba(255, 255, 255, 0.14)",
    boxShadow: "0 16px 48px rgba(0, 0, 0, 0.2)",
  },
  glassPanel: {
    bg: "rgba(255, 255, 255, 0.42)",
    backdropFilter: "blur(16px) saturate(135%)",
    WebkitBackdropFilter: "blur(16px) saturate(135%)",
    border: "1px solid rgba(255, 255, 255, 0.58)",
    borderRadius: "2px",
    boxShadow: "0 4px 28px rgba(46, 33, 25, 0.06)",
  },
  glassField: {
    bg: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.65)",
  },
} as const;

export const heroOverlays = {
  gradient:
    "linear-gradient(to top, rgba(46,33,25,0.72) 0%, rgba(46,33,25,0.38) 45%, rgba(58,40,32,0.18) 100%)",
  goldWash:
    "linear-gradient(135deg, rgba(246,200,163,0.22) 0%, rgba(46,33,25,0.08) 55%, rgba(46,33,25,0.28) 100%)",
  vignette:
    "radial-gradient(ellipse at 50% 85%, rgba(46,33,25,0.55) 0%, transparent 62%)",
} as const;
