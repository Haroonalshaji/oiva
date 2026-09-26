import type { MetadataRoute } from "next";
import { catalogUpdatedAt, products } from "@/data/products";
import { posts } from "@/data/posts";
import { legalNavItems, navItems } from "@/data/site";
import { canonicalUrl } from "@/lib/seo";

/** Bake sitemap.xml at `next build`. New products/posts appear on next deploy. */
export const dynamic = "force-static";

function newestPostDate(): string | undefined {
  if (posts.length === 0) return undefined;
  return posts.reduce((latest, post) => (post.date > latest ? post.date : latest), posts[0].date);
}

function entry(
  path: string,
  extras: Partial<MetadataRoute.Sitemap[number]> = {},
): MetadataRoute.Sitemap[number] {
  return {
    url: canonicalUrl(path),
    changeFrequency: "weekly",
    priority: 1,
    ...extras,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const newestJournal = newestPostDate();

  const staticPaths = Array.from(
    new Set(["/", ...navItems.map((item) => item.href), ...legalNavItems.map((item) => item.href)]),
  );

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => {
    const lastModified =
      path === "/journal"
        ? newestJournal
        : path === "/products"
          ? catalogUpdatedAt
          : undefined;
    return entry(path, lastModified ? { lastModified } : {});
  });

  const productPages: MetadataRoute.Sitemap = products.map((product) =>
    entry(`/products/${product.slug}`, { lastModified: catalogUpdatedAt }),
  );

  const journalPages: MetadataRoute.Sitemap = posts.map((post) =>
    entry(`/journal/${post.slug}`, { lastModified: post.date }),
  );

  return [...staticPages, ...productPages, ...journalPages];
}
