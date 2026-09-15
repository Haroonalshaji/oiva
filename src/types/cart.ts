export interface CartItem {
  slug: string;
  name: string;
  size: string;
  qty: number;
  price: number;
}

export function cartLineKey(slug: string, size: string): string {
  return `${slug}::${size}`;
}
