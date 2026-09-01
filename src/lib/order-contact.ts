import { siteConfig } from "@/data/site";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

function phoneDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function getTelUrl(): string {
  return `tel:${siteConfig.phone}`;
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${phoneDigits(siteConfig.phone)}?text=${encodeURIComponent(message)}`;
}

export function buildProductOrderMessage(product: Product, size: string): string {
  const productUrl = `${siteConfig.url}/products/${product.slug}`;

  return [
    "Hi, I'd like to order:",
    "",
    product.name,
    `Size: ${size}`,
    `Price: ${formatPrice(product.price)}`,
    productUrl,
  ].join("\n");
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

export function openProductOrder(product: Product, size: string): void {
  openWhatsApp(buildProductOrderMessage(product, size));
}

export function openGeneralOrderInquiry(): void {
  openWhatsApp("Hi, I'd like to place an order.");
}
