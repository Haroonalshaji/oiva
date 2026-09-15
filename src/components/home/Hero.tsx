"use client";

import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { imageConfig } from "@/lib/images";
import { heroOverlays } from "@/theme/foundations/glass";
import { typeScale } from "@/theme/foundations/typography";

export function Hero() {
  return (
    <Box
      as="section"
      position="relative"
      minH={{ base: "100svh", md: "100dvh" }}
      display="flex"
      alignItems="flex-end"
      overflow="hidden"
    >
      <Box position="absolute" inset={0} zIndex={0}>
        <Image
          src={imageConfig.hero.src}
          alt={imageConfig.hero.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <Box position="absolute" inset={0} bg={heroOverlays.gradient} />
        <Box position="absolute" inset={0} bg={heroOverlays.goldWash} />
        <Box position="absolute" inset={0} bg={heroOverlays.vignette} />
      </Box>

      <Container
        maxW="1440px"
        w="100%"
        px={{ base: 4, sm: 5, md: 10 }}
        pb={{ base: 8, sm: 12, md: 24 }}
        pt={{ base: "5.5rem", sm: "6.5rem", md: "8rem" }}
        position="relative"
        zIndex={1}
      >
        <VStack
          align="flex-start"
          spacing={{ base: 4, md: 6 }}
          w="full"
          maxW={{ base: "100%", md: "640px" }}
          layerStyle="glassDark"
          p={{ base: 4, sm: 6, md: 8 }}
          borderRadius="2px"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <Text
              fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
              fontStyle="italic"
              fontSize={typeScale.italicLg}
              color="oiva.blush"
            >
              the autumn edit
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <Heading
              as="h1"
              fontFamily="var(--font-playfair), 'Playfair Display', serif"
              fontSize={typeScale.hero}
              fontWeight={500}
              letterSpacing={{ base: "0.02em", md: "0.04em" }}
              lineHeight={1.15}
              color="oiva.ivory"
              wordBreak="break-word"
            >
              Quiet-luxury womenswear
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <Text
              fontFamily="var(--font-jost), 'Jost', sans-serif"
              fontWeight={300}
              fontSize={typeScale.bodyLg}
              color="oiva.champagne"
              letterSpacing="0.02em"
              lineHeight={1.7}
              maxW="520px"
            >
              An online ladies store for cotton kurtas, tunics, shirts and maxi dresses — made with intention.
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
            style={{ width: "100%" }}
          >
            <Button
              as={NextLink}
              href="/products"
              variant="outlineLight"
              size="lg"
              mt={2}
              w={{ base: "full", sm: "auto" }}
              whiteSpace="normal"
            >
              Explore the collection
            </Button>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
}
