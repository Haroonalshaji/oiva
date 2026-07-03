"use client";

import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { imageConfig } from "@/lib/images";

export function Hero() {
  return (
    <Box as="section" position="relative" minH={{ base: "85vh", md: "92vh" }} mt={{ base: "72px", md: "88px" }} display="flex" alignItems="flex-end">
      <Box position="absolute" inset={0} zIndex={0}>
        <Image
          src={imageConfig.hero.src}
          alt={imageConfig.hero.alt}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <Box
          position="absolute"
          inset={0}
          bg="linear-gradient(to top, rgba(46,33,25,0.6) 0%, rgba(46,33,25,0.2) 50%, rgba(46,33,25,0.08) 100%)"
        />
      </Box>

      <Container
        maxW="1440px"
        px={{ base: 5, md: 10 }}
        pb={{ base: 16, md: 24 }}
        pt={{ base: 32, md: 40 }}
        position="relative"
        zIndex={1}
      >
        <VStack align="flex-start" spacing={6} maxW="640px">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Text
              fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
              fontStyle="italic"
              fontSize={{ base: "xl", md: "2xl" }}
              color="oiva.blush"
            >
              the autumn edit
            </Text>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Heading
              as="h1"
              fontFamily="var(--font-playfair), 'Playfair Display', serif"
              fontSize={{ base: "2.5rem", sm: "3rem", md: "3.5rem", lg: "4rem" }}
              fontWeight={500}
              letterSpacing="0.04em"
              lineHeight={1.1}
              color="oiva.ivory"
            >
              Garments that speak in a lower register
            </Heading>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
          >
            <Button as={NextLink} href="/products" variant="outlineLight" size="lg" mt={2}>
              Explore the collection
            </Button>
          </motion.div>
        </VStack>
      </Container>
    </Box>
  );
}
