import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "silk-drape-blouse",
    name: "Silk Drape Blouse",
    price: 35000,
    material: "100% washed silk crepe",
    description:
      "Cut from a single length of silk, so the seam disappears into the movement. A relaxed drape that falls just below the hip, with a hidden placket and mother-of-pearl buttons.",
    fabric: "Silk crepe de chine, 19 momme",
    care: "Dry clean only. Store on a padded hanger.",
    category: "Tops",
    sizes: ["XS", "S", "M", "L"],
    featured: true,
  },
  {
    slug: "wool-tailored-coat",
    name: "Wool Tailored Coat",
    price: 74000,
    material: "Italian double-faced wool",
    description:
      "A structured coat with softened shoulders and a clean, uninterrupted line from collar to hem. Lined in cupro for a quiet glide against the skin.",
    fabric: "70% wool, 30% cashmere blend",
    care: "Professional dry clean. Brush after wear.",
    category: "Outerwear",
    sizes: ["XS", "S", "M", "L", "XL"],
    featured: true,
  },
  {
    slug: "linen-column-dress",
    name: "Linen Column Dress",
    price: 47000,
    material: "Belgian linen, enzyme-washed",
    description:
      "A column silhouette that moves without effort. The neckline sits just off the collarbone; the hem grazes the ankle with deliberate restraint.",
    fabric: "100% Belgian linen",
    care: "Hand wash cold, lay flat to dry. Iron on low steam.",
    category: "Dresses",
    sizes: ["XS", "S", "M", "L"],
    featured: true,
  },
  {
    slug: "cashmere-knit-polo",
    name: "Cashmere Knit Polo",
    price: 28500,
    material: "Fine-gauge Mongolian cashmere",
    description:
      "Knit on a traditional flat-bed machine for an even, breathable hand. The collar lies flat without stiffness — a piece that reads refined at first glance, effortless on closer look.",
    fabric: "100% Grade-A cashmere, 12-gauge",
    care: "Hand wash in lukewarm water with cashmere detergent.",
    category: "Knitwear",
    sizes: ["XS", "S", "M", "L"],
    featured: true,
  },
  {
    slug: "cotton-wide-trouser",
    name: "Cotton Wide Trouser",
    price: 32000,
    material: "Organic cotton twill",
    description:
      "A wide leg with a pressed crease that holds through the day. Sits at the natural waist with side pockets set flush to the seam.",
    fabric: "100% organic cotton twill",
    care: "Machine wash cold, hang dry. Press with steam.",
    category: "Trousers",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    slug: "satin-bias-skirt",
    name: "Satin Bias Skirt",
    price: 39000,
    material: "Cupro satin, bias-cut",
    description:
      "Cut on the bias so the fabric finds its own rhythm. Falls to mid-calf with a subtle flare that catches light without shine.",
    fabric: "100% cupro satin",
    care: "Dry clean recommended. Store folded.",
    category: "Skirts",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    slug: "merino-turtleneck",
    name: "Merino Turtleneck",
    price: 24500,
    material: "Extra-fine merino wool",
    description:
      "A second-skin layer in extra-fine merino. The turtleneck folds without bulk; the body skims without clinging.",
    fabric: "100% extrafine merino, 18.5 micron",
    care: "Hand wash or wool cycle, flat dry.",
    category: "Knitwear",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    slug: "leather-sling-back",
    name: "Leather Sling Back",
    price: 44000,
    material: "Vegetable-tanned calfskin",
    description:
      "A low heel shaped by hand over a wooden last. The sling strap sits without pressure; the toe is softly squared.",
    fabric: "Vegetable-tanned calfskin, leather sole",
    care: "Store with shoe trees. Condition leather seasonally.",
    category: "Footwear",
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
];

export const categories = ["All", "Tops", "Dresses", "Outerwear", "Knitwear", "Trousers", "Skirts", "Footwear"];

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
