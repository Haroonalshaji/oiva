"use client";

import { Box, Container, Link, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { siteConfig } from "@/data/site";
import { buildWhatsAppUrl, getTelUrl } from "@/lib/order-contact";
import { FadeIn } from "@/components/shared/FadeIn";

export function ReturnPolicyContent() {
  const whatsappUrl = buildWhatsAppUrl("Hi, I need help with a return or exchange.");

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
                Return &amp; Exchange Policy
              </Text>
              <Text
                fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
                fontStyle="italic"
                fontSize={{ base: "md", md: "lg" }}
                color="oiva.rose"
              >
                Clear terms, so every purchase stays free of stress.
              </Text>
            </VStack>

            <Box layerStyle="glassPanel" p={{ base: 6, md: 8 }} w="full">
              <VStack align="flex-start" spacing={8}>
                <VStack align="flex-start" spacing={4}>
                  <Text textStyle="body">
                    At OIVAH, we follow a customer-friendly policy so your purchases stay free of
                    stress or issues. Please ask as many questions as you wish before confirming
                    your order — fabric, design, measurements, or anything that helps you decide.
                    We would love to assist you.
                  </Text>
                  <Text textStyle="body">
                    You agree that certain categories of products may be exempt from returns or
                    refunds. Such categories will be identified to you at the time of purchase.
                  </Text>
                </VStack>

                <VStack align="flex-start" spacing={3}>
                  <Text textStyle="label" color="oiva.rose">
                    Please note
                  </Text>
                  <UnorderedList spacing={2} pl={1} color="oiva.ink">
                    <ListItem textStyle="body" fontSize="sm">
                      No refund or exchange for fancy items &amp; accessories.
                    </ListItem>
                    <ListItem textStyle="body" fontSize="sm">
                      No refund or exchange for size issues.
                    </ListItem>
                  </UnorderedList>
                </VStack>

                <VStack align="flex-start" spacing={3}>
                  <Text textStyle="label" color="oiva.rose">
                    Damaged items
                  </Text>
                  <Text textStyle="body" fontSize="sm">
                    To report damage, please get in touch with our customer care within{" "}
                    <strong>24 hours of delivery</strong>, along with the mandatory parcel opening
                    video for verification.
                  </Text>
                  <Text textStyle="body" fontSize="sm">
                    WhatsApp:{" "}
                    <Link href={whatsappUrl} isExternal color="oiva.cocoa" fontWeight={500}>
                      {siteConfig.phone}
                    </Link>
                    {" "}or email at{" "}
                    <Link href={`mailto:${siteConfig.email}`} color="oiva.cocoa" fontWeight={500}>
                      {siteConfig.email}
                    </Link>
                    . You may also call us on{" "}
                    <Link href={getTelUrl()} color="oiva.cocoa" fontWeight={500}>
                      {siteConfig.phone}
                    </Link>
                    .
                  </Text>
                  <Text textStyle="body" fontSize="sm">
                    Once your return request is verified, we will send you a fresh piece of the
                    particular design. If it is not available, we will provide a credit note of
                    the same amount, valid for <strong>30 days</strong>.
                  </Text>
                </VStack>

                <VStack align="flex-start" spacing={3}>
                  <Text textStyle="label" color="oiva.rose">
                    Returnable items
                  </Text>
                  <UnorderedList spacing={2} pl={1} color="oiva.ink">
                    <ListItem textStyle="body" fontSize="sm">
                      Items for return must be in original packaging, unworn, and in original
                      condition.
                    </ListItem>
                    <ListItem textStyle="body" fontSize="sm">
                      Sale articles and orders received from overseas are not eligible for
                      return or exchange.
                    </ListItem>
                  </UnorderedList>
                </VStack>

                <Box w="full" h="1px" bg="oiva.hairline" />

                <VStack align="flex-start" spacing={4}>
                  <Text
                    as="h2"
                    fontFamily="var(--font-playfair), 'Playfair Display', serif"
                    fontSize={{ base: "1.25rem", md: "1.5rem" }}
                    fontWeight={500}
                    color="oiva.cocoa"
                    letterSpacing="0.04em"
                  >
                    Cancellation &amp; Refund Policy
                  </Text>
                  <Text textStyle="body" fontSize="sm">
                    No cancellations and refunds are entertained once an order is confirmed.
                  </Text>
                </VStack>
              </VStack>
            </Box>

            <Text textStyle="caption" color="oiva.taupe">
              Studio: {siteConfig.address}
            </Text>
          </VStack>
        </FadeIn>
      </Container>
    </Box>
  );
}
