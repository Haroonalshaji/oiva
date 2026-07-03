import type { Metadata } from "next";
import { ProductsPageClient } from "@/components/products/ProductsPageClient";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo.products;

export default function ProductsPage() {
  return <ProductsPageClient />;
}
