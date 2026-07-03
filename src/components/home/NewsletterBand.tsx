"use client";

import { Box, Button, Container, Flex, FormControl, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FadeIn } from "@/components/shared/FadeIn";

export function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <Box as="section" bg="oiva.champagne" py={{ base: 16, md: 20 }}>
      <Container maxW="720px" px={{ base: 5, md: 10 }}>
        <FadeIn>
          <VStack spacing={8} textAlign="center">
            <Text
              fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
              fontStyle="italic"
              fontSize={{ base: "xl", md: "2xl" }}
              color="oiva.cocoa"
            >
              Join us for notes on craft, style, and quiet living
            </Text>
            {submitted ? (
              <Text textStyle="body" color="oiva.cocoa">
                Thank you. We will be in touch, occasionally and with intention.
              </Text>
            ) : (
              <Box as="form" onSubmit={handleSubmit} w="full" maxW="480px">
                <Flex direction={{ base: "column", sm: "row" }} gap={3}>
                  <FormControl flex={1}>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      bg="oiva.pearl"
                      required
                      aria-label="Email address"
                    />
                  </FormControl>
                  <Button type="submit" flexShrink={0}>
                    Subscribe
                  </Button>
                </Flex>
              </Box>
            )}
          </VStack>
        </FadeIn>
      </Container>
    </Box>
  );
}
