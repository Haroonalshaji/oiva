import { siteConfig } from "@/data/site";
import { formatPrice } from "@/lib/utils";
import type { CartItem } from "@/types/cart";
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

export function buildCartOrderMessage(items: CartItem[]): string {
  const lines = items.map((item, index) => {
    const productUrl = `${siteConfig.url}/products/${item.slug}`;
    const lineTotal = formatPrice(item.price * item.qty);
    return [
      `${index + 1}. ${item.name}`,
      `   Size: ${item.size}`,
      `   Qty: ${item.qty}`,
      `   Price: ${formatPrice(item.price)} each`,
      `   Line: ${lineTotal}`,
      `   ${productUrl}`,
    ].join("\n");
  });

  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return [
    "Hi OIVAH, I'd like to place an order.",
    "",
    ...lines,
    "",
    `Items: ${totalQty}`,
    `Subtotal: ${formatPrice(subtotal)}`,
    "",
    "Please confirm availability, prepaid payment, and India Post shipping.",
  ].join("\n");
}

export function openWhatsApp(message: string): void {
  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
}

export function openCartCheckout(items: CartItem[]): void {
  if (!items.length) return;
  openWhatsApp(buildCartOrderMessage(items));
}

export function openGeneralOrderInquiry(): void {
  openWhatsApp("Hi, I'd like to place an order.");
}

export function buildProductOrderMessage(product: Product, size: string, qty = 1): string {
  return buildCartOrderMessage([
    {
      slug: product.slug,
      name: product.name,
      size,
      qty,
      price: product.price,
    },
  ]);
}
