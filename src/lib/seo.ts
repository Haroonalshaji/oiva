import type { Metadata } from "next";
import { siteConfig, brandStatement } from "@/data/site";

const defaultDescription =
  "Quiet-luxury contemporary womenswear. Parisian couture sensibility meets Scandinavian restraint.";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}

export function createPageMetadata({
  title,
  description,
  path,
  image = "/logo/oiva-logo-square.png",
  type = "website",
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 600, height: 600, alt: siteConfig.name }],
      locale: "en_GB",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} · ${siteConfig.name}`,
      description,
      images: [image],
    },
  };
}

export const seo = {
  home: createPageMetadata({
    title: "Quiet-luxury contemporary womenswear",
    description: brandStatement,
    path: "/",
  }),
  products: createPageMetadata({
    title: "The collection",
    description:
      "Explore the OIVA collection — silk, wool, linen, and cashmere pieces designed to anchor a considered wardrobe.",
    path: "/products",
  }),
  about: createPageMetadata({
    title: "About",
    description:
      "The story behind the OIVA — quiet luxury, editorial poise, Parisian craftsmanship, and the meaning of intentional making.",
    path: "/about",
  }),
  journal: createPageMetadata({
    title: "The journal",
    description:
      "Notes on craft, style, and quiet living — essays on materials, making, and building a considered wardrobe.",
    path: "/journal",
  }),
  contact: createPageMetadata({
    title: "Contact",
    description:
      "Get in touch with the OIVA — studio visits, order enquiries, press, and collaborations. Paris atelier, Tuesday through Saturday.",
    path: "/contact",
  }),
} as const;

export { defaultDescription };
