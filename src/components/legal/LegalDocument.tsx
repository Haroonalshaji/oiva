"use client";

import { Box, Container, Flex, Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { legalNavItems, siteConfig } from "@/data/site";
import type { LegalDoc } from "@/data/legal";
import { buildWhatsAppUrl, getTelUrl } from "@/lib/order-contact";
import { FadeIn } from "@/components/shared/FadeIn";

interface LegalDocumentProps {
  doc: LegalDoc;
}

export function LegalDocument({ doc }: LegalDocumentProps) {
  const whatsappUrl = buildWhatsAppUrl("Hi, I have a question about your policies.");
  const otherPolicies = legalNavItems.filter((item) => item.href !== `/${doc.slug}`);

  return (
    <Box pt={{ base: 24, md: 32 }} pb={{ base: 16, md: 24 }}>
      <Container maxW="720px" px={{ base: 5, md: 10 }}>
        <FadeIn>
          <VStack align="flex-start" spacing={10}>
            <VStack align="flex-start" spacing={4}>
              <Text
                as="h1"
                fontFamily="var(--font-playfair), 'Playfair Display', serif"
                fontSize={{ base: "1.75rem", sm: "2rem", md: "2.5rem" }}
                fontWeight={500}
                color="oiva.cocoa"
                letterSpacing="0.04em"
              >
                {doc.title}
              </Text>
              <Text
                fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
                fontStyle="italic"
                fontSize={{ base: "md", md: "lg" }}
                color="oiva.rose"
              >
                {doc.intro}
              </Text>
              <Text textStyle="caption">Last updated: {doc.lastUpdated}</Text>
            </VStack>

            <Box layerStyle="glassPanel" p={{ base: 6, md: 8 }} w="full">
              <VStack align="flex-start" spacing={8}>
                {doc.sections.map((section) => (
                  <VStack key={section.title} align="flex-start" spacing={3}>
                    <Text
                      as="h2"
                      fontFamily="var(--font-playfair), 'Playfair Display', serif"
                      fontSize={{ base: "1.125rem", md: "1.25rem" }}
                      fontWeight={500}
                      color="oiva.cocoa"
                      letterSpacing="0.04em"
                    >
                      {section.title}
                    </Text>
                    {section.paragraphs?.map((paragraph) => (
                      <Text key={paragraph} textStyle="body" fontSize="sm">
                        {paragraph}
                      </Text>
                    ))}
                    {section.bullets && (
                      <UnorderedList spacing={2} pl={1} color="oiva.ink">
                        {section.bullets.map((item) => (
                          <ListItem key={item} textStyle="body" fontSize="sm">
                            {item}
                          </ListItem>
                        ))}
                      </UnorderedList>
                    )}
                  </VStack>
                ))}

                <Box w="full" h="1px" bg="oiva.hairline" />

                <VStack align="flex-start" spacing={3}>
                  <Text
                    as="h2"
                    fontFamily="var(--font-playfair), 'Playfair Display', serif"
                    fontSize={{ base: "1.125rem", md: "1.25rem" }}
                    fontWeight={500}
                    color="oiva.cocoa"
                    letterSpacing="0.04em"
                  >
                    Contact
                  </Text>
                  <Text textStyle="body" fontSize="sm">
                    OIVAH · {siteConfig.address}
                  </Text>
                  <Text textStyle="body" fontSize="sm">
                    Email:{" "}
                    <Link href={`mailto:${siteConfig.email}`} color="oiva.cocoa" fontWeight={500}>
                      {siteConfig.email}
                    </Link>
                    {" · "}
                    WhatsApp:{" "}
                    <Link href={whatsappUrl} isExternal color="oiva.cocoa" fontWeight={500}>
                      {siteConfig.phone}
                    </Link>
                    {" · "}
                    Phone:{" "}
                    <Link href={getTelUrl()} color="oiva.cocoa" fontWeight={500}>
                      {siteConfig.phone}
                    </Link>
                  </Text>
                </VStack>
              </VStack>
            </Box>

            <Flex gap={4} flexWrap="wrap">
              {otherPolicies.map((item) => (
                <Link
                  key={item.href}
                  as={NextLink}
                  href={item.href}
                  textStyle="caption"
                  color="oiva.taupe"
                  _hover={{ color: "oiva.cocoa" }}
                >
                  {item.label}
                </Link>
              ))}
            </Flex>
          </VStack>
        </FadeIn>
      </Container>
    </Box>
  );
}
