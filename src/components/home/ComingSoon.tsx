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
          bg="linear-gradient(135deg, rgba(46,33,25,0.78) 0%, rgba(58,40,32,0.62) 48%, rgba(246,200,163,0.30) 100%)"
        />
        <Box
          position="absolute"
          inset={0}
          bg="radial-gradient(ellipse at 50% 38%, rgba(246,200,163,0.14) 0%, transparent 58%)"
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
        <VStack spacing={{ base: 6, md: 8 }} maxW="560px" textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Box
              as="img"
              src="/logo/oivah-lockup.svg"
              alt="Oivah Feminine Atelier"
              w={{ base: "168px", md: "200px" }}
              h="auto"
              mx="auto"
              display="block"
            />
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
              color="oiva.gold"
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
              color="oiva.gold"
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
            <VStack spacing={3}>
              <Link
                href={`mailto:${siteConfig.email}`}
              fontFamily="var(--font-jost), 'Jost', sans-serif"
              fontSize="0.6875rem"
              fontWeight={500}
              letterSpacing="0.12em"
              textTransform="none"
              color="oiva.gold"
              borderBottom="1px solid"
              borderColor="oiva.gold"
              pb={1}
              _hover={{ color: "oiva.ivory", textDecoration: "none", borderColor: "oiva.ivory" }}
              transition="color 0.25s ease, border-color 0.25s ease"
            >
              {siteConfig.email}
            </Link>
            <Link
              href={`tel:${siteConfig.phone}`}
              fontFamily="var(--font-jost), 'Jost', sans-serif"
              fontSize="0.6875rem"
              fontWeight={500}
              letterSpacing="0.12em"
              textTransform="none"
              color="oiva.gold"
              borderBottom="1px solid"
              borderColor="oiva.gold"
              pb={1}
              mt={3}
              display="inline-block"
              _hover={{ color: "oiva.ivory", textDecoration: "none", borderColor: "oiva.ivory" }}
              transition="color 0.25s ease, border-color 0.25s ease"
            >
              {siteConfig.phone}
            </Link>
            </VStack>
          </motion.div>
        </VStack>
      </Flex>
    </Box>
  );
}
