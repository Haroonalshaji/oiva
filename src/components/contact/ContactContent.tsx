"use client";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { imageConfig } from "@/lib/images";
import { siteConfig } from "@/data/site";
import { FadeIn } from "@/components/shared/FadeIn";

export function ContactContent() {
  const [form, setForm] = useState({ name: "", email: "", topic: "general", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box pt={{ base: 24, md: 32 }} pb={{ base: 16, md: 24 }}>
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={{ base: 12, lg: 20 }}>
          <FadeIn>
            <VStack align="flex-start" spacing={8}>
              <VStack align="flex-start" spacing={4}>
                <Text
                  as="h1"
                  fontFamily="var(--font-playfair), 'Playfair Display', serif"
                  fontSize={{ base: "1.75rem", sm: "2rem", md: "2.5rem" }}
                  fontWeight={500}
                  color="oiva.cocoa"
                >
                  Contact
                </Text>
                <Text
                  fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
                  fontStyle="italic"
                  fontSize={{ base: "md", md: "lg" }}
                  color="oiva.rose"
                >
                  We welcome your note — whether an enquiry, a visit, or simply a conversation about craft.
                </Text>
              </VStack>

              {submitted ? (
                <VStack align="flex-start" spacing={4} py={8}>
                  <Box w="48px" h="1px" bg="oiva.hairline" />
                  <Text textStyle="body">
                    Thank you for reaching out. We will respond within two business days.
                  </Text>
                </VStack>
              ) : (
                <Box as="form" onSubmit={handleSubmit} w="full">
                  <VStack spacing={5} align="stretch">
                    <FormControl isRequired>
                      <FormLabel textStyle="label">Name</FormLabel>
                      <Input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel textStyle="label">Email</FormLabel>
                      <Input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel textStyle="label">Topic</FormLabel>
                      <Select
                        value={form.topic}
                        onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      >
                        <option value="general">General enquiry</option>
                        <option value="orders">Orders and shipping</option>
                        <option value="press">Press and collaborations</option>
                        <option value="visit">Studio visit</option>
                      </Select>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel textStyle="label">Message</FormLabel>
                      <Textarea
                        rows={6}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </FormControl>
                    <Button type="submit" size="lg" isLoading={loading} alignSelf="flex-start">
                      Send message
                    </Button>
                  </VStack>
                </Box>
              )}
            </VStack>
          </FadeIn>

          <FadeIn delay={0.15}>
            <VStack align="flex-start" spacing={8}>
              <Box
                position="relative"
                w="full"
                aspectRatio={{ base: 16 / 10, lg: 4 / 3 }}
                overflow="hidden"
                borderRadius="2px"
                sx={{ "& img": { transition: "transform 0.5s ease-out" } }}
                _hover={{ "& img": { transform: "scale(1.02)" } }}
              >
                <Image
                  src={imageConfig.contact.src}
                  alt={imageConfig.contact.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </Box>
              <VStack align="flex-start" spacing={4}>
                <Text textStyle="label">Studio</Text>
                <Text textStyle="body" fontSize="sm">{siteConfig.address}</Text>
                <Text textStyle="body" fontSize="sm">{siteConfig.hours}</Text>
                <Text textStyle="label" pt={4}>Email</Text>
                <Text textStyle="body" fontSize="sm">{siteConfig.email}</Text>
              </VStack>
            </VStack>
          </FadeIn>
        </Grid>
      </Container>
    </Box>
  );
}
