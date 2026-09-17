import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { posts } from "@/data/posts";
import { legalNavItems, navItems, siteConfig } from "@/data/site";
import { postImage, productGallery } from "@/lib/images";
import { canonicalUrl } from "@/lib/seo";

/** Bake sitemap.xml at `next build`. New products/posts appear on next deploy. */
export const dynamic = "force-static";

type RouteMeta = Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "priority">;

const routeMeta: Record<string, RouteMeta> = {
  "/": { changeFrequency: "daily", priority: 1 },
  "/products": { changeFrequency: "daily", priority: 0.9 },
  "/contact": { changeFrequency: "daily", priority: 0.9 },
  "/about": { changeFrequency: "daily", priority: 0.9 },
  "/journal": { changeFrequency: "daily", priority: 0.9 },
  "/returns": { changeFrequency: "daily", priority: 0.9 },
  "/shipping": { changeFrequency: "daily", priority: 0.9 },
  "/privacy": { changeFrequency: "daily", priority: 0.9 },
  "/cookies": { changeFrequency: "daily", priority: 0.9 },
  "/terms": { changeFrequency: "daily", priority: 0.9 },
};

const defaultMeta: RouteMeta = { changeFrequency: "monthly", priority: 0.5 };

function absoluteAsset(src: string): string {
  return `${siteConfig.url}${src.startsWith("/") ? src : `/${src}`}`;
}

function newestPostDate(): string | undefined {
  if (posts.length === 0) return undefined;
  return posts.reduce((latest, post) => (post.date > latest ? post.date : latest), posts[0].date);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const newestJournal = newestPostDate();

  const staticPaths = Array.from(
    new Set(["/", ...navItems.map((item) => item.href), ...legalNavItems.map((item) => item.href)]),
  );

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => {
    const meta = routeMeta[path] ?? defaultMeta;
    return {
      url: canonicalUrl(path),
      changeFrequency: meta.changeFrequency,
      priority: meta.priority,
      ...(path === "/journal" && newestJournal ? { lastModified: newestJournal } : {}),
    };
  });

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: canonicalUrl(`/products/${product.slug}`),
    changeFrequency: "weekly",
    priority: 0.8,
    images: productGallery(product.slug).map(absoluteAsset),
  }));

  const journalPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: canonicalUrl(`/journal/${post.slug}`),
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.6,
    images: [absoluteAsset(postImage(post.slug))],
  }));

  return [...staticPages, ...productPages, ...journalPages];
}
