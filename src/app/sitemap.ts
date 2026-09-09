import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { posts } from "@/data/posts";
import { canonicalUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: canonicalUrl("/"), lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: canonicalUrl("/products"), lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: canonicalUrl("/about"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: canonicalUrl("/journal"), lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: canonicalUrl("/contact"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: canonicalUrl("/returns"), lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: canonicalUrl(`/products/${product.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const journalPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: canonicalUrl(`/journal/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...journalPages];
}
