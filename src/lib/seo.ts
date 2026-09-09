import type { Metadata } from "next";
import { siteConfig, seoKeywords } from "@/data/site";

const defaultDescription =
  "Shop cotton kurtas, tunics, shirts and maxi dresses at OIVAH. Quiet-luxury ladies wear from Palakkad, Kerala — order online across India via WhatsApp.";

const ogImage = {
  url: "/logo/oivah-lockup-og.png",
  width: 696,
  height: 502,
  alt: "OIVAH — online ladies store for quiet-luxury womenswear",
};

const indexFollow = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string[];
  authors?: string[];
  publishedTime?: string;
  /** Skip the root title template so the <title> matches this string exactly. */
  absoluteTitle?: boolean;
}

export function canonicalUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  if (path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function mergeKeywords(extra: string[] = []): string[] {
  return Array.from(new Set([...seoKeywords, ...extra]));
}

export function createPageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  keywords = [],
  authors = [siteConfig.author],
  publishedTime,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const url = canonicalUrl(path);
  const allKeywords = mergeKeywords(keywords);
  const ogTitle = absoluteTitle ? title : `${title} · ${siteConfig.brand}`;
  const images = image
    ? [{ url: image, width: 1200, height: 1600, alt: title }]
    : [ogImage];

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: allKeywords,
    authors: authors.map((name) => ({ name })),
    creator: siteConfig.author,
    publisher: siteConfig.publisher,
    robots: indexFollow,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      siteName: siteConfig.brand,
      images,
      locale: "en_IN",
      type,
      ...(type === "article" && publishedTime
        ? { publishedTime, authors }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: images.map((img) => img.url),
    },
  };
}

export const seo = {
  home: createPageMetadata({
    title: "OIVAH — Online Ladies Store for Quiet-Luxury Womenswear",
    description: defaultDescription,
    path: "/",
    absoluteTitle: true,
    keywords: [
      "ladies store online India",
      "buy cotton kurta online India",
    ],
  }),
  products: createPageMetadata({
    title: "OIVAH — Women's Clothing Online | Kurtas & Dresses",
    description:
      "Shop women's clothing online at OIVAH — cotton kurtas, tunics, shirts and maxi dresses. Quiet-luxury ladies wear from Palakkad, delivered across India.",
    path: "/products",
    absoluteTitle: true,
    keywords: ["cotton tops for women", "buy maxi dress online"],
  }),
  about: createPageMetadata({
    title: "About OIVAH — Ladies Boutique in Palakkad, Kerala",
    description:
      "OIVAH is an online ladies store and atelier in Cherpulassery, Palakkad, Kerala — quiet-luxury cotton kurtas and contemporary womenswear, made with intention.",
    path: "/about",
    absoluteTitle: true,
    keywords: ["Kerala ladies boutique", "Palakkad womenswear atelier"],
  }),
  journal: createPageMetadata({
    title: "OIVAH Journal — Style, Craft and Quiet Living",
    description:
      "Notes on women's style, cotton craft and quiet living from OIVAH — an online ladies store for contemporary womenswear in India.",
    path: "/journal",
    absoluteTitle: true,
    keywords: ["women's fashion blog India", "womenswear craft stories"],
  }),
  contact: createPageMetadata({
    title: "Contact OIVAH — Order Ladies Wear via WhatsApp",
    description:
      "Contact OIVAH to order women's clothing via WhatsApp or email. Studio in Cherpulassery, Palakkad, Kerala. Ladies wear enquiries welcome across India.",
    path: "/contact",
    absoluteTitle: true,
    keywords: ["OIVAH contact number", "WhatsApp clothing order Kerala"],
  }),
  returns: createPageMetadata({
    title: "Return & Exchange Policy | OIVAH",
    description:
      "OIVAH return and exchange policy — damage claims within 24 hours, WhatsApp support, credit notes, and cancellation terms for our Kerala ladies store.",
    path: "/returns",
    absoluteTitle: true,
    keywords: ["OIVAH return policy", "ladies wear exchange India"],
  }),
} as const;

export { defaultDescription, seoKeywords, mergeKeywords, ogImage, indexFollow };
