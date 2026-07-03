"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { productImage } from "@/lib/images";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";
import { FadeIn } from "@/components/shared/FadeIn";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const [added, setAdded] = useState(false);

  const handleAddToBag = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <Box pt={{ base: 24, md: 32 }} pb={{ base: 16, md: 24 }}>
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 8, lg: 16 }}>
          <FadeIn>
            <VStack spacing={4}>
              {[0, 1].map((i) => (
                <Box
                  key={i}
                  position="relative"
                  w="full"
                  aspectRatio={3 / 4}
                  overflow="hidden"
                  borderRadius="2px"
                  bg="oiva.champagne"
                  sx={{ "& img": { transition: "transform 0.5s ease-out" } }}
                  _hover={{ "& img": { transform: "scale(1.02)" } }}
                >
                  <Image
                    src={productImage(product.slug, i)}
                    alt={`${product.name} — view ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    priority={i === 0}
                  />
                </Box>
              ))}
            </VStack>
          </FadeIn>

          <FadeIn delay={0.15}>
            <VStack
              align="flex-start"
              spacing={6}
              position={{ lg: "sticky" }}
              top={{ lg: "120px" }}
              alignSelf="start"
            >
              <Text textStyle="label" color="oiva.rose">
                {product.category}
              </Text>
              <Text
                as="h1"
                fontFamily="var(--font-playfair), 'Playfair Display', serif"
                fontSize={{ base: "1.75rem", sm: "2rem", md: "2.5rem" }}
                fontWeight={500}
                letterSpacing="0.02em"
                color="oiva.cocoa"
              >
                {product.name}
              </Text>
              <Text
                fontFamily="var(--font-jost), 'Jost', sans-serif"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight={500}
                color="oiva.cocoa"
                letterSpacing="0.02em"
                sx={{ fontVariantNumeric: "tabular-nums" }}
              >
                {formatPrice(product.price)}
              </Text>
              <Text textStyle="body">{product.description}</Text>

              <Divider borderColor="oiva.hairline" my={2} />

              <Box w="full">
                <Text textStyle="label" mb={3}>
                  Size
                </Text>
                <RadioGroup value={size} onChange={setSize}>
                  <Stack direction="row" flexWrap="wrap" gap={2}>
                    {product.sizes.map((s) => (
                      <Radio
                        key={s}
                        value={s}
                        sx={{
                          "& .chakra-radio__control": {
                            display: "none",
                          },
                        }}
                      >
                        <Flex
                          px={4}
                          py={2}
                          border="1px solid"
                          borderColor={size === s ? "oiva.cocoa" : "oiva.hairline"}
                          borderRadius="2px"
                          fontSize="sm"
                          fontWeight={400}
                          color="oiva.cocoa"
                          cursor="pointer"
                          transition="border-color 0.3s ease-out"
                          _hover={{ borderColor: "oiva.cocoa" }}
                        >
                          {s}
                        </Flex>
                      </Radio>
                    ))}
                  </Stack>
                </RadioGroup>
              </Box>

              <Button w="full" size="lg" onClick={handleAddToBag}>
                {added ? "Added to bag" : "Add to bag"}
              </Button>

              <Divider borderColor="oiva.hairline" my={2} />

              <VStack align="flex-start" spacing={3} w="full">
                <Box>
                  <Text textStyle="label" mb={1}>Fabric</Text>
                  <Text textStyle="caption">{product.fabric}</Text>
                </Box>
                <Box>
                  <Text textStyle="label" mb={1}>Care</Text>
                  <Text textStyle="caption">{product.care}</Text>
                </Box>
              </VStack>
            </VStack>
          </FadeIn>
        </Grid>
      </Container>
    </Box>
  );
}
