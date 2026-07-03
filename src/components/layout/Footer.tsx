"use client";

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";
import { navItems, siteConfig } from "@/data/site";
import { FadeIn } from "@/components/shared/FadeIn";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <Box as="footer" bg="oiva.cocoaDeep" color="oiva.ivory" mt="auto">
      <Container maxW="1440px" px={{ base: 5, md: 10 }} py={{ base: 12, md: 16 }}>
        <FadeIn>
          <Grid
            templateColumns={{ base: "1fr", sm: "1fr 1fr", lg: "repeat(4, 1fr)" }}
            gap={{ base: 10, lg: 12 }}
          >
            <GridItem colSpan={{ base: 1, sm: 2, lg: 1 }}>
              <VStack align="flex-start" spacing={6}>
                <Image
                  src="/logo/oiva-logo-reversed.png"
                  alt="the OIVA"
                  width={150}
                  height={55}
                  style={{ height: "auto", maxHeight: "44px", width: "auto" }}
                />
                <Text
                  fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
                  fontStyle="italic"
                  fontSize={{ base: "md", md: "lg" }}
                  lineHeight={1.6}
                  color="oiva.champagne"
                  maxW="280px"
                >
                  Quiet luxury for the considered wardrobe. Parisian poise, Scandinavian restraint.
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack align="flex-start" spacing={4}>
                <Text textStyle="label" color="oiva.champagne">
                  Navigate
                </Text>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    as={NextLink}
                    href={item.href}
                    textStyle="navLink"
                    color="oiva.ivory"
                    _hover={{ color: "oiva.rose" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </VStack>
            </GridItem>

            <GridItem>
              <VStack align="flex-start" spacing={4}>
                <Text textStyle="label" color="oiva.champagne">
                  Contact
                </Text>
                <Link href={`mailto:${siteConfig.email}`} color="oiva.ivory" fontWeight={300} fontSize="sm">
                  {siteConfig.email}
                </Link>
                <Text fontWeight={300} fontSize="sm" color="oiva.champagne">
                  {siteConfig.address}
                </Text>
                <Text fontWeight={300} fontSize="sm" color="oiva.taupe">
                  {siteConfig.hours}
                </Text>
              </VStack>
            </GridItem>

            <GridItem>
              <VStack align="flex-start" spacing={4}>
                <Text textStyle="label" color="oiva.champagne">
                  Newsletter
                </Text>
                <Text fontWeight={300} fontSize="sm" color="oiva.champagne">
                  Notes on craft and quiet living, delivered occasionally.
                </Text>
                {subscribed ? (
                  <Text fontSize="sm" color="oiva.blush" fontStyle="italic">
                    Thank you. You are on the list.
                  </Text>
                ) : (
                  <Box as="form" onSubmit={handleSubscribe} w="full">
                    <Flex direction={{ base: "column", sm: "row" }} gap={2}>
                      <FormControl flex={1}>
                        <Input
                          type="email"
                          placeholder="Your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          borderColor="oiva.taupe"
                          color="oiva.ivory"
                          _placeholder={{ color: "oiva.taupe" }}
                          required
                          aria-label="Email address"
                          size="sm"
                        />
                      </FormControl>
                      <Button type="submit" variant="outlineLight" flexShrink={0} size="sm">
                        Subscribe
                      </Button>
                    </Flex>
                  </Box>
                )}
              </VStack>
            </GridItem>
          </Grid>
        </FadeIn>

        <Divider my={{ base: 8, md: 10 }} borderColor="oiva.cocoa" />

        <Flex
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
          align={{ base: "flex-start", sm: "center" }}
          gap={3}
        >
          <Text textStyle="label" color="oiva.taupe" fontSize="0.625rem">
            &copy; the OIVA, {new Date().getFullYear()}. All rights reserved.
          </Text>
          <Text textStyle="label" color="oiva.taupe" fontSize="0.625rem">
            Paris &middot; Crafted with intention
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
