/**
 * Centralized image configuration.
 * Editorial lookbook matching OIVA product language:
 * printed cotton tunics, floral maxis, palm shirts — young Indian women.
 */

export const imageConfig = {
  hero: {
    src: "/images/hero.jpg",
    alt: "Young Indian women in OIVAH cotton maxi dress, floral tunic and palm-print shirt",
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
      src: "/images/products/checked-full-length-top.jpg",
      alt: "Sand check full-length tunic with side slit",
      caption: "A long line, a quiet check",
      href: "/products/checked-full-length-top",
      width: 900,
      height: 1200,
    },
    {
      src: "/images/products/floral-print-cord-set.jpg",
      alt: "Sage rose floral co-ord set",
      caption: "The co-ord, worn as one",
      href: "/products/floral-print-cord-set",
      width: 700,
      height: 900,
    },
    {
      src: "/images/products/cotton-three-piece-anarkali-2.jpg",
      alt: "Brick orange cotton three-piece Anarkali suit",
      caption: "Anarkali in brick orange",
      href: "/products/cotton-three-piece-anarkali",
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
  "checked-full-length-top": [
    "/images/products/checked-full-length-top.jpg",
    "/images/products/checked-full-length-top-2.jpg",
  ],
  "floral-print-cord-set": [
    "/images/products/floral-print-cord-set-2.jpg",
    "/images/products/floral-print-cord-set.jpg",
  ],
  "embroidery-printed-cord-set": ["/images/products/embroidery-printed-cord-set.jpg"],
  "cotton-three-piece-anarkali": [
    "/images/products/cotton-three-piece-anarkali.jpg",
    "/images/products/cotton-three-piece-anarkali-2.jpg",
  ],
  "lace-trim-cord-set": [
    "/images/products/lace-trim-cord-set.jpg",
    "/images/products/lace-trim-cord-set-2.jpg",
  ],
  "checked-short-top": ["/images/products/checked-short-top.jpg"],
};

const postImages: Record<string, string> = {
  "the-case-for-fewer-better-things": "/images/lookbook/2.jpg",
  "inside-our-atelier": "/images/about/2.jpg",
  "a-season-without-noise": "/images/lookbook/3.jpg",
  "on-fabric-and-feeling": "/images/about/2.jpg",
  "the-meaning-of-the": "/images/lookbook/1.jpg",
  "quiet-living-starts-in-the-closet": "/images/about/3.jpg",
};

export function productGallery(slug: string): string[] {
  return productImages[slug] ?? ["/images/hero.jpg"];
}

export function productImage(slug: string, index = 0): string {
  const gallery = productGallery(slug);
  return gallery[index % gallery.length];
}

export function postImage(slug: string): string {
  return postImages[slug] ?? "/images/hero.jpg";
}
