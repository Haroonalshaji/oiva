import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { getFeaturedProducts } from "@/data/products";
import { ProductCard } from "@/components/shared/ProductCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="oiva.ivory">
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <FadeIn>
          <SectionHeading
            eyebrow="the edit"
            title="Featured pieces"
            description="A selection from the current collection — each designed to anchor a considered wardrobe."
          />
        </FadeIn>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 8, md: 10 }} mt={12}>
          {products.map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.1}>
              <ProductCard product={product} index={i} priority={i < 2} />
            </FadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
