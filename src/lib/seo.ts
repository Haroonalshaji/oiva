import type { Metadata } from "next";
import { siteConfig, brandStatement, seoKeywords } from "@/data/site";

const defaultDescription =
  "OIVAH — online ladies store for quiet-luxury womenswear in India. Shop cotton kurtas, tunics, shirts and maxi dresses. Order via WhatsApp from Palakkad, Kerala.";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
}

function mergeKeywords(extra: string[] = []): string[] {
  return Array.from(new Set([...seoKeywords, ...extra]));
}

export function createPageMetadata({
  title,
  description,
  path,
  image = "/logo/oivah-lockup-og.png",
  type = "website",
  keywords = [],
}: PageMetadataOptions): Metadata {
  const url = `${siteConfig.url}${path}`;
  const allKeywords = mergeKeywords(keywords);

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 600, height: 600, alt: siteConfig.name }],
      locale: "en_IN",
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
    title: "Online ladies store — quiet-luxury womenswear",
    description: brandStatement,
    path: "/",
    keywords: [
      "shop women's clothing online",
      "ladies online shopping Kerala",
      "buy cotton kurta online India",
    ],
  }),
  products: createPageMetadata({
    title: "Women's clothing collection — shop online",
    description:
      "Shop women's clothing online at OIVAH — cotton kurtas, tunics, shirts and maxi dresses. An online ladies store for contemporary cotton womenswear, available across India.",
    path: "/products",
    keywords: [
      "women's collection online",
      "ladies dresses online",
      "cotton tops for women",
      "buy maxi dress online",
    ],
  }),
  about: createPageMetadata({
    title: "About OIVAH — Kerala ladies boutique",
    description:
      "OIVAH is an online ladies store and atelier in Cherpulassery, Palakkad, Kerala — quiet luxury womenswear, cotton kurtas and contemporary ladies wear made with intention.",
    path: "/about",
    keywords: [
      "Kerala ladies boutique",
      "women's clothing brand India",
      "Palakkad womenswear atelier",
    ],
  }),
  journal: createPageMetadata({
    title: "Journal — style, craft & quiet living",
    description:
      "Notes on women's style, cotton craft and quiet living from OIVAH — an online ladies store for contemporary womenswear in India.",
    path: "/journal",
    keywords: [
      "women's fashion blog India",
      "ladies style tips",
      "womenswear craft stories",
    ],
  }),
  contact: createPageMetadata({
    title: "Contact — order & enquiries",
    description:
      "Contact OIVAH online ladies store — order women's clothing via WhatsApp or email. Studio in Cherpulassery, Palakkad, Kerala. Ladies wear enquiries welcome.",
    path: "/contact",
    keywords: [
      "order ladies wear online",
      "WhatsApp clothing order Kerala",
      "OIVAH contact number",
    ],
  }),
} as const;

export { defaultDescription, seoKeywords, mergeKeywords };
