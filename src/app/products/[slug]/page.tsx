import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/ProductDetail";
import { getProduct, products } from "@/data/products";
import { createPageMetadata } from "@/lib/seo";
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
    title: product.name,
    description: `${product.description} ${product.material}. ${formatPrice(product.price)}.`,
    path: `/products/${product.slug}`,
    image: productImage(product.slug, 0),
  });
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  return <ProductDetail product={product} />;
}
