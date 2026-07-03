"use client";

import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { productImage } from "@/lib/images";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
  priority?: boolean;
}

export function ProductCard({ product, index = 0, priority = false }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} style={{ textDecoration: "none" }}>
      <VStack
        align="stretch"
        spacing={4}
        role="group"
        transition="opacity 0.35s ease-out"
        _hover={{ opacity: 0.92 }}
      >
        <Box
          position="relative"
          aspectRatio={3 / 4}
          overflow="hidden"
          bg="oiva.champagne"
          borderRadius="2px"
          border="1px solid"
          borderColor="oiva.hairline"
          sx={{ "& img": { transition: "transform 0.5s ease-out" } }}
          _groupHover={{ "& img": { transform: "scale(1.03)" } }}
        >
          <Image
            src={productImage(product.slug, index)}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            style={{ objectFit: "cover" }}
            priority={priority}
          />
        </Box>
        <VStack align="flex-start" spacing={1}>
          <Text
            fontFamily="var(--font-playfair), 'Playfair Display', serif"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight={500}
            color="oiva.cocoa"
            letterSpacing="0.02em"
          >
            {product.name}
          </Text>
          <Text textStyle="caption">{product.material}</Text>
          <Text
            fontFamily="var(--font-jost), 'Jost', sans-serif"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight={500}
            color="oiva.cocoa"
            letterSpacing="0.01em"
            sx={{ fontVariantNumeric: "tabular-nums" }}
          >
            {formatPrice(product.price)}
          </Text>
        </VStack>
      </VStack>
    </Link>
  );
}
