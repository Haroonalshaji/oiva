import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/ProductDetail";
import { getProduct, products } from "@/data/products";
import { createPageMetadata, mergeKeywords } from "@/lib/seo";
import { formatPrice } from "@/lib/utils";
import { productImage } from "@/lib/images";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProduct(params.slug);
  if (!product) return { title: "Product not found" };

  return createPageMetadata({
    title: `${product.name} — buy online`,
    description: `${product.description} ${product.material}. ${formatPrice(product.price)}. Buy online at OIVAH — ladies store for women's ${product.category.toLowerCase()} in India.`,
    path: `/products/${product.slug}`,
    image: productImage(product.slug, 0),
    keywords: mergeKeywords([
      product.name,
      product.category,
      `${product.category.toLowerCase()} for women online`,
      "buy ladies wear online India",
    ]),
  });
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
