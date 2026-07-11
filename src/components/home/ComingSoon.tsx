"use client";

import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { imageConfig } from "@/lib/images";

export function ComingSoon() {
  return (
    <Box as="section" position="relative" minH="100vh" display="flex" alignItems="center" overflow="hidden">
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
          bg="linear-gradient(135deg, rgba(46,33,25,0.72) 0%, rgba(74,56,44,0.55) 45%, rgba(185,141,120,0.35) 100%)"
        />
        <Box
          position="absolute"
          inset={0}
          bg="radial-gradient(ellipse at 30% 40%, rgba(251,246,238,0.08) 0%, transparent 55%)"
        />
      </Box>

      <Flex
        position="relative"
        zIndex={1}
        w="full"
        minH="100vh"
        align="center"
        justify="center"
        px={{ base: 6, md: 10 }}
        py={{ base: 16, md: 20 }}
      >
        <VStack spacing={{ base: 8, md: 10 }} maxW="560px" textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Box position="relative" w={{ base: "220px", md: "280px" }} mx="auto" aspectRatio={1024 / 375}>
              <Image
                src="/logo/oivah-no-bg.svg"
                alt="OIVAH"
                fill
                priority
                sizes="(max-width: 768px) 220px, 280px"
                style={{ objectFit: "contain" }}
              />
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          >
            <Text
              fontFamily="var(--font-jost), 'Jost', sans-serif"
              fontSize="0.6875rem"
              fontWeight={500}
              letterSpacing="0.28em"
              textTransform="uppercase"
              color="oiva.champagne"
              mb={5}
            >
              Coming soon
            </Text>
            <Text
              as="h1"
              fontFamily="var(--font-playfair), 'Playfair Display', serif"
              fontSize={{ base: "2rem", sm: "2.5rem", md: "3rem" }}
              fontWeight={500}
              letterSpacing="0.04em"
              lineHeight={1.15}
              color="oiva.ivory"
            >
              Quiet luxury, arriving shortly
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
          >
            <Text
              fontFamily="var(--font-jost), 'Jost', sans-serif"
              fontWeight={300}
              fontSize={{ base: "md", md: "lg" }}
              lineHeight={1.75}
              color="oiva.blush"
              maxW="420px"
              mx="auto"
            >
              We are preparing the atelier. Our first collection will open here soon —
              fewer pieces, made with intention.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <Link
              href={`mailto:${siteConfig.email}`}
              fontFamily="var(--font-jost), 'Jost', sans-serif"
              fontSize="0.6875rem"
              fontWeight={500}
              letterSpacing="0.12em"
              textTransform="none"
              color="oiva.ivory"
              borderBottom="1px solid"
              borderColor="oiva.champagne"
              pb={1}
              _hover={{ color: "oiva.blush", textDecoration: "none", borderColor: "oiva.blush" }}
              transition="color 0.25s ease, border-color 0.25s ease"
            >
              {siteConfig.email}
            </Link>
          </motion.div>
        </VStack>
      </Flex>
    </Box>
  );
}
