import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/products/ProductDetail";
import { BreadcrumbJsonLd, ProductJsonLd } from "@/components/seo/JsonLd";
import { getProduct, products } from "@/data/products";
import { siteConfig } from "@/data/site";
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
    title: `${product.name} — Buy Online`,
    description: `Buy ${product.name} online at OIVAH. ${product.material}. ${formatPrice(product.price)}. Women's ${product.category.toLowerCase()} from Palakkad, Kerala — order across India.`,
    path: `/products/${product.slug}`,
    image: productImage(product.slug, 0),
    keywords: [
      product.name,
      `buy ${product.name.toLowerCase()} online`,
    ],
  });
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  return (
    <>
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd
        items={[
          { name: siteConfig.brand, path: "/" },
          { name: "Women's clothing", path: "/products" },
          { name: product.name, path: `/products/${product.slug}` },
        ]}
      />
      <ProductDetail product={product} />
    </>
  );
}
