import type { Pillar, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export const pillars: Pillar[] = [
  {
    title: "Quiet luxury",
    description:
      "Quality that reveals itself slowly — in the hand of the fabric, the precision of a seam, the way a garment settles on the body over time.",
  },
  {
    title: "Editorial poise",
    description:
      "Every piece is considered as part of a visual narrative — restrained, intentional, and composed with the eye of an editor rather than a marketer.",
  },
  {
    title: "Contemporary femininity",
    description:
      "Strength without severity. Softness without fragility. Silhouettes that honour the body without performing for it.",
  },
  {
    title: "Timelessness",
    description:
      "We design for seasons, not trends. What you invest in today should feel equally right five years from now.",
  },
];

export const brandStatement =
  "the OIVA is a quiet-luxury womenswear house where Parisian couture sensibility meets Scandinavian restraint. We make fewer pieces, with more intention — garments designed to become the foundation of a considered wardrobe.";

export const siteConfig = {
  name: "the OIVA",
  url: "https://theoiva.com",
  email: "hello@theoiva.com",
  address: "14 Rue de la Roquette, 75011 Paris",
  hours: "Tuesday – Saturday, 10:00 – 18:00",
  social: {
    instagram: "https://instagram.com/theoiva",
    pinterest: "https://pinterest.com/theoiva",
  },
} as const;
