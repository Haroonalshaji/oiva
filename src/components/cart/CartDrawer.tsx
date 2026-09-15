"use client";

import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { TbMinus, TbPlus, TbTrash } from "react-icons/tb";
import { useCart } from "@/components/cart/CartProvider";
import { openCartCheckout } from "@/lib/order-contact";
import { formatPrice } from "@/lib/utils";
import { typeScale } from "@/theme/foundations/typography";

export function QtyStepper({
  qty,
  onChange,
  min = 1,
  max = 20,
}: {
  qty: number;
  onChange: (qty: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <Flex align="center" border="1px solid" borderColor="oiva.hairline" borderRadius="2px" w="fit-content">
      <IconButton
        aria-label="Decrease quantity"
        icon={<TbMinus size={14} />}
        variant="ghost"
        size="sm"
        borderRadius="0"
        isDisabled={qty <= min}
        onClick={() => onChange(Math.max(min, qty - 1))}
        color="oiva.cocoa"
        _hover={{ bg: "transparent", color: "oiva.rose" }}
      />
      <Text
        minW="32px"
        textAlign="center"
        fontSize={typeScale.body}
        color="oiva.cocoa"
        sx={{ fontVariantNumeric: "tabular-nums" }}
      >
        {qty}
      </Text>
      <IconButton
        aria-label="Increase quantity"
        icon={<TbPlus size={14} />}
        variant="ghost"
        size="sm"
        borderRadius="0"
        isDisabled={qty >= max}
        onClick={() => onChange(Math.min(max, qty + 1))}
        color="oiva.cocoa"
        _hover={{ bg: "transparent", color: "oiva.rose" }}
      />
    </Flex>
  );
}

export function CartDrawer() {
  const { items, setQty, removeItem, subtotal, isOpen, closeCart } = useCart();

  const handleCheckout = () => {
    openCartCheckout(items);
  };

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={closeCart} size="sm">
      <DrawerOverlay bg="rgba(62, 18, 20, 0.28)" />
      <DrawerContent bg="oiva.ivory" color="oiva.cocoa">
        <DrawerCloseButton />
        <DrawerHeader borderBottom="1px solid" borderColor="oiva.hairline" textStyle="label">
          Your bag
        </DrawerHeader>
        <DrawerBody py={6}>
          {items.length === 0 ? (
            <VStack spacing={4} align="flex-start" pt={4}>
              <Text textStyle="body">Bag is empty.</Text>
              <Link as={NextLink} href="/products" onClick={closeCart} textStyle="label" color="oiva.rose">
                Shop the collection
              </Link>
            </VStack>
          ) : (
            <VStack spacing={5} align="stretch" divider={<Divider borderColor="oiva.hairline" />}>
              {items.map((item) => (
                <Flex key={`${item.slug}-${item.size}`} gap={3} justify="space-between">
                  <Box minW={0} flex={1}>
                    <Link
                      as={NextLink}
                      href={`/products/${item.slug}`}
                      onClick={closeCart}
                      fontSize={typeScale.body}
                      color="oiva.cocoa"
                      _hover={{ color: "oiva.rose", textDecoration: "none" }}
                    >
                      {item.name}
                    </Link>
                    <Text textStyle="caption" mt={1}>
                      Size {item.size}
                    </Text>
                    <Text textStyle="caption" mt={1} sx={{ fontVariantNumeric: "tabular-nums" }}>
                      {formatPrice(item.price * item.qty)}
                    </Text>
                    <Box mt={3}>
                      <QtyStepper qty={item.qty} onChange={(qty) => setQty(item.slug, item.size, qty)} />
                    </Box>
                  </Box>
                  <IconButton
                    aria-label={`Remove ${item.name} size ${item.size}`}
                    icon={<TbTrash size={16} />}
                    variant="ghost"
                    size="sm"
                    color="oiva.cocoa"
                    _hover={{ color: "oiva.rose", bg: "transparent" }}
                    onClick={() => removeItem(item.slug, item.size)}
                  />
                </Flex>
              ))}
            </VStack>
          )}
        </DrawerBody>
        {items.length > 0 && (
          <DrawerFooter flexDir="column" alignItems="stretch" gap={3} borderTop="1px solid" borderColor="oiva.hairline">
            <Flex justify="space-between">
              <Text textStyle="label">Subtotal</Text>
              <Text textStyle="label" sx={{ fontVariantNumeric: "tabular-nums" }}>
                {formatPrice(subtotal)}
              </Text>
            </Flex>
            <Button size="lg" w="full" onClick={handleCheckout}>
              Checkout on WhatsApp
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
