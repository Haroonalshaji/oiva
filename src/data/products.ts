import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "silk-drape-blouse",
    name: "Rust Floral Pintucks Tunic",
    price: 1890,
    material: "Printed cotton voile",
    description:
      "A rust-orange floral tunic with vertical pintucks, mandarin collar, and a bordered front placket. Three-quarter sleeves and a soft A-line fall — easy over denim or linen trousers.",
    fabric: "100% cotton voile, hand-block style print",
    care: "Machine wash cold, hang dry. Iron on low steam.",
    category: "Tops",
    sizes: ["XS", "S", "M", "L"],
    featured: true,
  },
  {
    slug: "wool-tailored-coat",
    name: "Pink Palm Print Shirt",
    price: 2490,
    material: "Lightweight printed cotton",
    description:
      "Pink and white vertical stripes with bold palm tree motifs. Mandarin collar, button placket, and gathered cuffs — a breezy resort shirt for warm days.",
    fabric: "100% cotton poplin",
    care: "Machine wash cold, hang dry.",
    category: "Tops",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    slug: "linen-column-dress",
    name: "Peach Floral Maxi Dress",
    price: 2190,
    material: "Printed cotton voile",
    description:
      "A floor-length peach maxi with floral medallions, stripe-trimmed sleeves, and a front slit. Light enough for daytime, polished enough for evening.",
    fabric: "100% cotton voile",
    care: "Hand wash cold, hang dry. Iron on low steam.",
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    featured: true,
  },
  {
    slug: "cashmere-knit-polo",
    name: "Teal Floral Pintucks Tunic",
    price: 2290,
    material: "Printed cotton blend",
    description:
      "Teal ground with coral and pink florals, mandarin collar, and front pintucks. Side-seam pocket and bordered placket — a daily kurta with quiet detail.",
    fabric: "Cotton blend with soft hand-feel finish",
    care: "Machine wash cold on gentle, hang dry.",
    category: "Tops",
    sizes: ["XS", "S", "M", "L"],
    featured: true,
  },
  {
    slug: "cotton-wide-trouser",
    name: "Palm Striped Cotton Shirt",
    price: 1690,
    material: "Printed cotton poplin",
    description:
      "Vertical stripe base with palm tree block print in lime-green or pink. Camp collar line, puff cuffs, and a relaxed shirt length — pair with denim for everyday ease.",
    fabric: "100% cotton poplin",
    care: "Machine wash cold, hang dry.",
    category: "Tops",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    slug: "satin-bias-skirt",
    name: "Rust Floral Pintucks Kurta",
    price: 1990,
    material: "Printed cotton voile",
    description:
      "Rust floral print with a mandarin collar, geometric placket trim, and fine front pintucks. Long sleeves with matching cuff borders — rooted in craft, cut for today.",
    fabric: "100% cotton voile",
    care: "Machine wash cold, hang dry.",
    category: "Tops",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    slug: "merino-turtleneck",
    name: "White Embroidered Cotton Shirt",
    price: 1790,
    material: "Textured cotton with hand-finished trim",
    description:
      "A crisp white shirt in breathable textured cotton. Terracotta geometric embroidery traces the collar and placket — minimal base, artisan detail.",
    fabric: "100% cotton with contrast embroidery",
    care: "Machine wash cold on gentle, hang dry.",
    category: "Tops",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    slug: "leather-sling-back",
    name: "Teal Floral Cotton Kurta",
    price: 2450,
    material: "Printed cotton voile",
    description:
      "Deep teal with coral and pink florals, mandarin collar, and a bordered placket. Three-quarter sleeves and an easy kurta length — atelier-made for daily wear.",
    fabric: "100% cotton voile, hand-block style print",
    care: "Machine wash cold, hang dry.",
    category: "Tops",
    sizes: ["XS", "S", "M", "L"],
  },
];

export const categories = ["All", "Tops", "Dresses"];

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
