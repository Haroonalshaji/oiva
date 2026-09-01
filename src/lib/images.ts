/**
 * Centralized image configuration.
 * Editorial lookbook matching OIVA product language:
 * printed cotton tunics, floral maxis, palm shirts — young Indian women.
 */

export const imageConfig = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Three young Indian women in printed cotton maxi, pintucks tunic, and palm-print shirt",
    width: 1920,
    height: 1080,
  },
  brandStatement: {
    src: "/images/brand-statement.jpg",
    alt: "Young Indian woman in teal floral cotton pintucks tunic, studio portrait",
    width: 800,
    height: 1000,
  },
  lookbook: [
    {
      src: "/images/lookbook/1.jpg",
      alt: "Peach floral medallion cotton maxi dress with thigh slit and white scarf",
      caption: "Silk that moves with intention",
      width: 900,
      height: 1200,
    },
    {
      src: "/images/lookbook/2.jpg",
      alt: "Rust-orange floral cotton pintucks tunic with mandarin collar",
      caption: "The quiet geometry of a well-cut line",
      width: 700,
      height: 900,
    },
    {
      src: "/images/lookbook/3.jpg",
      alt: "Palm-print striped cotton shirts in lime and pink with denim",
      caption: "Where the seam disappears",
      width: 900,
      height: 1100,
    },
  ],
  about: [
    {
      src: "/images/about/1.jpg",
      alt: "Two young Indian women in floral maxi and rust pintucks tunic outdoors",
      width: 900,
      height: 1100,
    },
    {
      src: "/images/about/2.jpg",
      alt: "Close-up of floral cotton pintucks, placket trim, and fabric texture",
      width: 900,
      height: 1100,
    },
    {
      src: "/images/about/3.jpg",
      alt: "Young Indian woman in pink palm-print striped cotton shirt",
      width: 900,
      height: 1100,
    },
  ],
  contact: {
    src: "/images/contact.jpg",
    alt: "Two young Indian women in floral tunic and palm shirt in a light atelier",
    width: 1200,
    height: 900,
  },
  team: [
    {
      src: "/images/team/1.jpg",
      alt: "Ananya Mehta, Creative Director",
      width: 400,
      height: 500,
    },
    {
      src: "/images/team/2.jpg",
      alt: "Priya Sharma, Head of Atelier",
      width: 400,
      height: 500,
    },
    {
      src: "/images/team/3.jpg",
      alt: "Riya Kapoor, Materials Director",
      width: 400,
      height: 500,
    },
  ],
} as const;

const productImages: Record<string, string[]> = {
  "silk-drape-blouse": ["/images/lookbook/2.jpg", "/images/about/2.jpg"],
  "wool-tailored-coat": ["/images/about/3.jpg", "/images/lookbook/3.jpg"],
  "linen-column-dress": ["/images/lookbook/1.jpg", "/images/about/1.jpg"],
  "cashmere-knit-polo": ["/images/brand-statement.jpg", "/images/contact.jpg"],
  "cotton-wide-trouser": ["/images/lookbook/3.jpg", "/images/about/3.jpg"],
  "satin-bias-skirt": ["/images/about/2.jpg", "/images/lookbook/2.jpg"],
  "merino-turtleneck": ["/images/team/2.jpg", "/images/brand-statement.jpg"],
  "leather-sling-back": ["/images/contact.jpg", "/images/about/1.jpg"],
};

const postImages: Record<string, string> = {
  "the-case-for-fewer-better-things": "/images/lookbook/2.jpg",
  "inside-our-atelier": "/images/about/2.jpg",
  "a-season-without-noise": "/images/lookbook/3.jpg",
  "on-fabric-and-feeling": "/images/about/2.jpg",
  "the-meaning-of-the": "/images/lookbook/1.jpg",
  "quiet-living-starts-in-the-closet": "/images/about/3.jpg",
};

export function productImage(slug: string, index = 0): string {
  const slugImages = productImages[slug];
  if (slugImages) return slugImages[index % slugImages.length];
  return "/images/hero.jpg";
}

export function postImage(slug: string): string {
  return postImages[slug] ?? "/images/hero.jpg";
}
