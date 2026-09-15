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
                Returns / Exchanges
              </Text>
              <Text
                fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
                fontStyle="italic"
                fontSize={{ base: "md", md: "lg" }}
                color="oiva.rose"
              >
                Refunds and exchanges within 15 days of delivery.
              </Text>
            </VStack>

            <Box layerStyle="glassPanel" p={{ base: 6, md: 8 }} w="full">
              <VStack align="flex-start" spacing={8}>
                <VStack align="flex-start" spacing={3}>
                  <Text textStyle="body" fontSize="sm">
                    If you are unsatisfied with the purchase, we offer refunds and exchanges for a
                    period of <strong>15 days</strong> from the date of delivery of the order. To
                    be eligible for return, the product must be in its original condition, unused
                    and with the product tags intact. Orders once exchanged are not eligible for
                    returns.
                  </Text>
                </VStack>

                <VStack align="flex-start" spacing={3}>
                  <Text
                    as="h2"
                    textStyle="label"
                    color="oiva.rose"
                  >
                    Items not eligible for return
                  </Text>
                  <UnorderedList spacing={2} pl={1} color="oiva.ink">
                    <ListItem textStyle="body" fontSize="sm">
                      Fabrics
                    </ListItem>
                    <ListItem textStyle="body" fontSize="sm">
                      Towels
                    </ListItem>
                  </UnorderedList>
                </VStack>

                <VStack align="flex-start" spacing={3}>
                  <Text
                    as="h2"
                    textStyle="label"
                    color="oiva.rose"
                  >
                    How returns are collected
                  </Text>
                  <Text textStyle="body" fontSize="sm">
                    After we acknowledge your return request, we will arrange for a reverse pick-up
                    from the address in the order. Our delivery partner will collect the package
                    from you within <strong>1–3 days</strong> and ship it to us. Once the return is
                    picked up, it takes <strong>5–7 days</strong> for us to initiate a refund or
                    exchange.
                  </Text>
                  <Text textStyle="body" fontSize="sm">
                    In case neither of our courier partners, Bluedart or Delhivery, has pick-up
                    services in your pin code, you will have to send us the items back via a
                    reputed courier service and send us the tracking details.
                  </Text>
                </VStack>

                <VStack align="flex-start" spacing={3}>
                  <Text
                    as="h2"
                    textStyle="label"
                    color="oiva.rose"
                  >
                    Inspection, exchange and refund
                  </Text>
                  <Text textStyle="body" fontSize="sm">
                    After receiving the returned items, we will process them further after a
                    thorough inspection to ensure they meet the conditions mentioned above. In case
                    of exchanges to another size, it will be subject to availability at the time we
                    receive the return package. It might take <strong>5–7 business days</strong>{" "}
                    for the refund to get processed and credited to your account once initiated.
                  </Text>
                </VStack>

                <VStack align="flex-start" spacing={3}>
                  <Text
                    as="h2"
                    textStyle="label"
                    color="oiva.rose"
                  >
                    COD and prepaid refunds
                  </Text>
                  <Text textStyle="body" fontSize="sm">
                    For COD orders, the refund will be processed via bank transfer. The bank
                    details have to be entered on our return portal while initiating the return.
                    For prepaid orders, the refund will be initiated via the original payment
                    method you used during the purchase.
                  </Text>
                </VStack>

                <Box w="full" h="1px" bg="oiva.hairline" />

                <VStack align="flex-start" spacing={3}>
                  <Text textStyle="body" fontSize="sm">
                    To start a return or exchange, write to us on WhatsApp at{" "}
                    <Link href={whatsappUrl} isExternal color="oiva.cocoa" fontWeight={500}>
                      {siteConfig.phone}
                    </Link>
                    {" "}or email{" "}
                    <Link href={`mailto:${siteConfig.email}`} color="oiva.cocoa" fontWeight={500}>
                      {siteConfig.email}
                    </Link>
                    . You may also call us on{" "}
                    <Link href={getTelUrl()} color="oiva.cocoa" fontWeight={500}>
                      {siteConfig.phone}
                    </Link>
                    .
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
