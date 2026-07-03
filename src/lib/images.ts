/**
 * Centralized image configuration.
 * Swap placeholder URLs with local /public/images paths when real photography is available.
 */
export const imageConfig = {
  hero: {
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
    alt: "Editorial womenswear in soft natural light",
    width: 1920,
    height: 1280,
  },
  brandStatement: {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Fabric detail in warm neutral tones",
    width: 800,
    height: 1000,
  },
  lookbook: [
    {
      src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80",
      alt: "Model in flowing silk dress",
      caption: "Silk that moves with intention",
      width: 900,
      height: 1200,
    },
    {
      src: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&q=80",
      alt: "Editorial portrait in studio light",
      caption: "The quiet geometry of a well-cut line",
      width: 700,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80",
      alt: "Minimal tailoring detail",
      caption: "Where the seam disappears",
      width: 900,
      height: 1100,
    },
  ],
  about: [
    {
      src: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=900&q=80",
      alt: "Atelier workspace with natural materials",
      width: 900,
      height: 1100,
    },
    {
      src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80",
      alt: "Hand-finished garment detail",
      width: 900,
      height: 1100,
    },
    {
      src: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=900&q=80",
      alt: "Textile swatches in warm neutrals",
      width: 900,
      height: 1100,
    },
  ],
  contact: {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    alt: "Studio interior with warm light",
    width: 800,
    height: 600,
  },
  team: [
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      alt: "Elena Voss, Creative Director",
      width: 400,
      height: 500,
    },
    {
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      alt: "Amélie Laurent, Head of Atelier",
      width: 400,
      height: 500,
    },
    {
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      alt: "Sofia Lindberg, Materials Director",
      width: 400,
      height: 500,
    },
  ],
} as const;

export function productImage(slug: string, index = 0): string {
  const images: Record<string, string[]> = {
    "silk-drape-blouse": [
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80",
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
    ],
    "wool-tailored-coat": [
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=800&q=80",
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=800&q=80",
    ],
    "linen-column-dress": [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
    ],
    "cashmere-knit-polo": [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    ],
    "cotton-wide-trouser": [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    ],
    "satin-bias-skirt": [
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=800&q=80",
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80",
    ],
    "merino-turtleneck": [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    ],
    "leather-sling-back": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80",
    ],
  };

  const slugImages = images[slug];
  if (slugImages) return slugImages[index % slugImages.length];
  return "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80";
}

export function postImage(slug: string): string {
  const images: Record<string, string> = {
    "the-case-for-fewer-better-things":
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1200&q=80",
    "inside-our-atelier":
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1200&q=80",
    "a-season-without-noise":
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    "on-fabric-and-feeling":
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80",
    "the-meaning-of-the":
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80",
    "quiet-living-starts-in-the-closet":
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=1200&q=80",
  };

  return images[slug] ?? "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80";
}
