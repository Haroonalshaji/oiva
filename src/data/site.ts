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
  "OIVAH is a quiet-luxury online ladies store for contemporary womenswear — cotton kurtas, tunics, shirts and maxi dresses, made with intention in Palakkad, Kerala.";

/** Base keywords for meta tags and search visibility (India-focused ladies wear). */
export const seoKeywords = [
  "online ladies store",
  "ladies store online India",
  "women's clothing online India",
  "buy ladies clothes online",
  "women's fashion store online",
  "ladies wear online shopping",
  "women's boutique online",
  "cotton kurta online",
  "cotton tunics for women",
  "women's tops online India",
  "maxi dresses online India",
  "contemporary womenswear India",
  "Palakkad ladies boutique",
  "Kerala women's clothing store",
  "Cherpulassery ladies wear",
  "quiet luxury womenswear",
  "OIVAH",
  "Oivah Feminine Atelier",
  "cotton kurtas Kerala",
  "western wear for women India",
  "floral cotton kurta",
  "women's cotton shirts online",
] as const;

export const siteConfig = {
  name: "the OIVA",
  url: "https://oivah.com",
  email: "info@oivah.com",
  phone: "+917907668989",
  contactRecipients: {
    to: "info@oivah.com",
    cc: [
      "haroonalshaji@gmail.com",
      "hilalpadiyath@gmail.com",
      "raheenakoulath@gmail.com",
    ],
  },
  address: "OIVAH, Cherpulassery, Cherpulassery Post, Palakkad, Kerala — PIN 679503",
  hours: "Tuesday – Saturday, 10:00 – 18:00",
  /** Set to false when ready to open the full site. */
  comingSoon: false,
  social: {
    instagram: "https://www.instagram.com/oivah.official/",
    pinterest: "https://pinterest.com/theoiva",
  },
} as const;
