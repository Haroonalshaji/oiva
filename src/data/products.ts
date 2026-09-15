import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "checked-full-length-top",
    name: "Sand Check Full-Length Tunic",
    price: 1419,
    material: "Premium imported fabric",
    description:
      "A floor-grazing tunic in sand-and-ivory checks, cut straight through the body with a side slit so you can walk and sit with ease. Wear it as a modest maxi, or layer over trousers. Premium imported fabric. Free size, fits up to XXL. Also available in lime cream, black, and Mary’s rose.",
    fabric: "Premium imported fabric",
    care: "Gentle machine wash cold, hang dry. Iron on low.",
    category: "Tops",
    sizes: ["Free size (upto XXL)"],
    featured: true,
  },
  {
    slug: "floral-print-cord-set",
    name: "Sage Rose Co-ord Set",
    price: 2029,
    material: "Imported material",
    description:
      "A two-piece co-ord in sage, with red rose medallions on the body and ivory stripes on the sleeves. Soft imported fabric, modest length, and an easy everyday fall. Wear the set together or mix the pieces. Free size, fits up to XXL. Also available in Mary’s rose, tropical peach, and atmosphere grey.",
    fabric: "Imported material",
    care: "Gentle machine wash cold, hang dry. Iron on low.",
    category: "Sets",
    sizes: ["Free size (upto XXL)"],
    featured: true,
  },
  {
    slug: "embroidery-printed-cord-set",
    name: "Mauve Floral Embroidery Co-ord",
    price: 2029,
    material: "Imported material",
    description:
      "A matching kurta-and-palazzo set in dusty mauve, dotted with tiny floral embroidery. Side-slit kurta, wide palazzo, and a quiet studio-ready finish in imported fabric. Free size, fits up to XXL. Available in 5 colours.",
    fabric: "Imported material",
    care: "Gentle machine wash cold, hang dry. Iron on low.",
    category: "Sets",
    sizes: ["Free size (upto XXL)"],
    featured: true,
  },
  {
    slug: "cotton-three-piece-anarkali",
    name: "Brick Orange Cotton Anarkali Suit",
    price: 1529,
    material: "Cotton",
    description:
      "A three-piece cotton Anarkali in brick orange — flared kurta, matching bottom, and a block-printed dupatta in ivory motifs. Festive without being heavy. Cotton. Colour: brick orange. Sizes M, L, XL, XXL.",
    fabric: "Cotton",
    care: "Gentle machine wash cold, hang dry. Iron on low.",
    category: "Dresses",
    sizes: ["M", "L", "XL", "XXL"],
    featured: true,
  },
  {
    slug: "lace-trim-cord-set",
    name: "Lemon Lace-Trim Co-ord",
    price: 1649,
    material: "Premium imported material",
    description:
      "A lemon co-ord with scattered pearl-like embroidery and white lace on the cuffs and palazzo hem. Light, modest, and finished in premium imported fabric. Free size, fits up to XXL. Available in 3 colours, including Mary’s rose and ice melt.",
    fabric: "Premium imported material",
    care: "Gentle machine wash cold, hang dry. Iron on low.",
    category: "Sets",
    sizes: ["Free size (upto XXL)"],
    featured: true,
  },
  {
    slug: "checked-short-top",
    name: "Red Gingham Balloon-Sleeve Top",
    price: 729,
    material: "Rayon",
    description:
      "A cropped red-and-white gingham top in rayon, with a gathered yoke, tie neck, and balloon sleeves finished in lace. Pair with wide jeans or palazzo. Sizes 38, 42, 46.",
    fabric: "Rayon",
    care: "Gentle machine wash cold, hang dry. Iron on low.",
    category: "Tops",
    sizes: ["38", "42", "46"],
    featured: true,
  },
];

export const categories = ["All", "Tops", "Dresses", "Sets"];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const current = getProduct(slug);
  if (!current) return products.slice(0, limit);
  return products.filter((p) => p.slug !== slug && p.category === current.category).slice(0, limit);
}
