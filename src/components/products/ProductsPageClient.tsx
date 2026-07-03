"use client";

import { Box, Container, Flex, Select, SimpleGrid, Text } from "@chakra-ui/react";
import { useMemo, useState } from "react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/shared/ProductCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

export function ProductsPageClient() {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    const result = category === "All" ? [...products] : products.filter((p) => p.category === category);
    if (sort === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sort === "name") result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [category, sort]);

  return (
    <Box pt={{ base: 28, md: 32 }} pb={{ base: 16, md: 24 }}>
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <FadeIn>
          <SectionHeading
            title="The collection"
            description="Garments designed to become the foundation of a considered wardrobe."
          />
        </FadeIn>

        <Flex
          mt={10}
          mb={12}
          gap={{ base: 4, md: 6 }}
          direction={{ base: "column", sm: "row" }}
          align={{ base: "stretch", sm: "center" }}
          justify="space-between"
        >
          <Flex gap={{ base: 3, md: 4 }} flexWrap="wrap" align="center">
            {categories.map((cat) => (
              <Text
                key={cat}
                as="button"
                textStyle="label"
                color={category === cat ? "oiva.rose" : "oiva.taupe"}
                cursor="pointer"
                onClick={() => setCategory(cat)}
                transition="color 0.3s ease-out"
                _hover={{ color: "oiva.cocoa" }}
              >
                {cat}
              </Text>
            ))}
          </Flex>
          <Select
            maxW={{ base: "full", sm: "200px" }}
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="name">Name</option>
          </Select>
        </Flex>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={{ base: 6, sm: 8, md: 10 }}>
          {filtered.map((product, i) => (
            <FadeIn key={product.slug} delay={(i % 4) * 0.08}>
              <ProductCard product={product} index={i} />
            </FadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
