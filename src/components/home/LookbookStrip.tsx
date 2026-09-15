"use client";

import { Box, Container, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { imageConfig } from "@/lib/images";
import { typeScale } from "@/theme/foundations/typography";
import { FadeIn } from "@/components/shared/FadeIn";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function LookbookStrip() {
  const images = imageConfig.lookbook;

  return (
    <Box as="section" py={{ base: 16, md: 24 }}>
      <Container maxW="1440px" px={{ base: 4, sm: 5, md: 10 }}>
        <FadeIn>
          <SectionHeading
            title="The lookbook"
            description="The current collection, photographed as it is worn — tunics, co-ords, and Anarkali."
          />
        </FadeIn>
        <Grid
          templateColumns={{ base: "1fr", sm: "1fr 1fr", lg: "1fr 0.7fr 1fr" }}
          templateRows={{ base: "auto", sm: "auto auto", lg: "auto" }}
          gap={{ base: 4, md: 6 }}
          alignItems="start"
          mt={12}
        >
          {images.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.15}>
              <Box
                as={NextLink}
                href={img.href}
                position="relative"
                display="block"
                aspectRatio={i === 1 ? 3 / 4 : 4 / 5}
                overflow="hidden"
                borderRadius="2px"
                mt={{ base: 0, lg: i === 1 ? 12 : 0 }}
                gridColumn={{ base: "auto", sm: i === 2 ? "1 / -1" : "auto", lg: "auto" }}
                sx={{ "& img": { transition: "transform 0.5s ease-out" } }}
                _hover={{ "& img": { transform: "scale(1.03)" }, textDecoration: "none" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
                <Box
                  position="absolute"
                  bottom={3}
                  left={3}
                  right={3}
                  p={{ base: 3, md: 4 }}
                  layerStyle="glassDark"
                  borderRadius="2px"
                >
                  <Text
                    fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
                    fontStyle="italic"
                    fontSize={typeScale.italic}
                    color="oiva.ivory"
                  >
                    {img.caption}
                  </Text>
                </Box>
              </Box>
            </FadeIn>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
