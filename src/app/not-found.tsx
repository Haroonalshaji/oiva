import { Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import type { Metadata } from "next";
import NextLink from "next/link";
import { FadeIn } from "@/components/shared/FadeIn";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Box
      pt={{ base: 24, md: 32 }}
      pb={{ base: 16, md: 24 }}
      minH={{ base: "60vh", md: "70vh" }}
      display="flex"
      alignItems="center"
    >
      <Container maxW="720px" px={{ base: 5, md: 10 }}>
        <FadeIn>
          <VStack spacing={8} textAlign="center">
            <Box layerStyle="glassPanel" px={{ base: 10, md: 14 }} py={{ base: 8, md: 10 }} w="full">
              <VStack spacing={6}>
                <Text
                  fontFamily="var(--font-playfair), 'Playfair Display', serif"
                  fontSize={{ base: "4rem", md: "5rem" }}
                  fontWeight={500}
                  letterSpacing="0.08em"
                  color="oiva.champagne"
                  lineHeight={1}
                >
                  404
                </Text>
                <Box w="48px" h="1px" bg="oiva.gold" />
                <Text
                  as="h1"
                  fontFamily="var(--font-playfair), 'Playfair Display', serif"
                  fontSize={{ base: "1.5rem", md: "2rem" }}
                  fontWeight={500}
                  letterSpacing="0.04em"
                  color="oiva.cocoa"
                >
                  This page has stepped away
                </Text>
                <Text
                  fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
                  fontStyle="italic"
                  fontSize={{ base: "md", md: "lg" }}
                  color="oiva.rose"
                  lineHeight={1.7}
                  maxW="480px"
                >
                  The garment you were looking for is not here — perhaps it was moved, or the link has faded with time.
                </Text>
              </VStack>
            </Box>

            <VStack spacing={3}>
              <Button as={NextLink} href="/" size="lg">
                Return home
              </Button>
              <Button as={NextLink} href="/products" variant="outline" size="md">
                Browse the collection
              </Button>
            </VStack>
          </VStack>
        </FadeIn>
      </Container>
    </Box>
  );
}
