import { Box, Button, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import NextLink from "next/link";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/shared/ProductCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

export function FeaturedProducts() {
  const products = getFeaturedProducts().slice(0, 4);

  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="oiva.ivory">
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <FadeIn>
          <SectionHeading
            eyebrow="the edit"
            title="The collection"
            description="Co-ords, tunics and Anarkali suits — modest everyday pieces in cotton, rayon, and imported fabrics."
          />
        </FadeIn>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 8, md: 10 }} mt={12}>
          {products.map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.1}>
              <ProductCard product={product} index={i} priority={i < 2} />
            </FadeIn>
          ))}
        </SimpleGrid>
        <Flex justify="center" mt={{ base: 10, md: 14 }}>
          <Button as={NextLink} href="/products" size="lg">
            View all products
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}
