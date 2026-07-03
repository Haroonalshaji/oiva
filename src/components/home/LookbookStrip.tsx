"use client";

import { Box, Container, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { imageConfig } from "@/lib/images";
import { FadeIn } from "@/components/shared/FadeIn";

export function LookbookStrip() {
  const images = imageConfig.lookbook;

  return (
    <Box as="section" py={{ base: 16, md: 24 }}>
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <Grid
          templateColumns={{ base: "1fr", sm: "1fr 1fr", lg: "1fr 0.7fr 1fr" }}
          templateRows={{ base: "auto", sm: "auto auto", lg: "auto" }}
          gap={{ base: 4, md: 6 }}
          alignItems="start"
        >
          {images.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.15}>
              <Box
                position="relative"
                aspectRatio={i === 1 ? 3 / 4 : 4 / 5}
                overflow="hidden"
                borderRadius="2px"
                mt={{ md: i === 1 ? 12 : 0 }}
                gridColumn={{ base: "auto", sm: i === 2 ? "1 / -1" : "auto", lg: "auto" }}
                sx={{ "& img": { transition: "transform 0.5s ease-out" } }}
                _hover={{ "& img": { transform: "scale(1.03)" } }}
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
                  bottom={0}
                  left={0}
                  right={0}
                  p={{ base: 4, md: 6 }}
                  bg="linear-gradient(to top, rgba(46,33,25,0.35), transparent)"
                >
                  <Text
                    fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
                    fontStyle="italic"
                    fontSize={{ base: "md", md: "lg" }}
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
