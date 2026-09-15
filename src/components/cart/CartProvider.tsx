"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { cartLineKey, type CartItem } from "@/types/cart";

const STORAGE_KEY = "oivah-cart";

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty"> & { qty?: number }) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  removeItem: (slug: string, size: string) => void;
  clear: () => void;
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function useCart(): CartContextValue {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) =>
        item &&
        typeof item.slug === "string" &&
        typeof item.name === "string" &&
        typeof item.size === "string" &&
        typeof item.price === "number" &&
        typeof item.qty === "number" &&
        item.qty > 0
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setItems(loadCart());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const addItem = useCallback((item: Omit<CartItem, "qty"> & { qty?: number }) => {
    const qty = Math.max(1, item.qty ?? 1);
    setItems((current) => {
      const key = cartLineKey(item.slug, item.size);
      const existing = current.find((line) => cartLineKey(line.slug, line.size) === key);
      if (existing) {
        return current.map((line) =>
          cartLineKey(line.slug, line.size) === key ? { ...line, qty: line.qty + qty } : line
        );
      }
      return [...current, { ...item, qty }];
    });
  }, []);

  const setQty = useCallback((slug: string, size: string, qty: number) => {
    setItems((current) => {
      if (qty < 1) {
        return current.filter((line) => !(line.slug === slug && line.size === size));
      }
      return current.map((line) =>
        line.slug === slug && line.size === size ? { ...line, qty } : line
      );
    });
  }, []);

  const removeItem = useCallback((slug: string, size: string) => {
    setItems((current) => current.filter((line) => !(line.slug === slug && line.size === size)));
  }, []);

  const clear = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const itemCount = useMemo(() => items.reduce((sum, line) => sum + line.qty, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((sum, line) => sum + line.price * line.qty, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      addItem,
      setQty,
      removeItem,
      clear,
      itemCount,
      subtotal,
      isOpen,
      openCart,
      closeCart,
    }),
    [items, addItem, setQty, removeItem, clear, itemCount, subtotal, isOpen, openCart, closeCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
