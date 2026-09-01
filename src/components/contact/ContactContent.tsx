"use client";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { imageConfig } from "@/lib/images";
import { buildWhatsAppUrl, getTelUrl } from "@/lib/order-contact";
import { siteConfig } from "@/data/site";
import { FadeIn } from "@/components/shared/FadeIn";

export function ContactContent() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", topic: "general", message: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    onClose();
    setForm({ name: "", email: "", phone: "", topic: "general", message: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        setError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      onOpen();
    } catch {
      setError("Something went wrong. Please try again.");
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

              <Box as="form" onSubmit={handleSubmit} w="full" layerStyle="glassPanel" p={{ base: 5, md: 6 }}>
                <VStack spacing={5} align="stretch">
                  <FormControl isRequired>
                    <FormLabel textStyle="label">Name</FormLabel>
                    <Input
                      variant="glass"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel textStyle="label">Email</FormLabel>
                    <Input
                      type="email"
                      variant="glass"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel textStyle="label">Phone</FormLabel>
                    <Input
                      type="tel"
                      variant="glass"
                      placeholder="+91 79076 68989"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel textStyle="label">Topic</FormLabel>
                    <Select
                      variant="glass"
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
                      variant="glass"
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </FormControl>
                  <Button type="submit" size="lg" isLoading={loading} alignSelf="flex-start">
                    Send message
                  </Button>
                  {error ? (
                    <Text fontSize="sm" color="red.600">
                      {error}
                    </Text>
                  ) : null}
                </VStack>
              </Box>
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
                <Link href={`mailto:${siteConfig.email}`} textStyle="body" fontSize="sm" color="oiva.cocoa">
                  {siteConfig.email}
                </Link>
                <Text textStyle="label" pt={4}>Phone</Text>
                <Link href={getTelUrl()} textStyle="body" fontSize="sm" color="oiva.cocoa">
                  {siteConfig.phone}
                </Link>
                <Link
                  href={buildWhatsAppUrl("Hi, I'd like to get in touch.")}
                  isExternal
                  textStyle="body"
                  fontSize="sm"
                  color="oiva.rose"
                >
                  Message on WhatsApp
                </Link>
              </VStack>
            </VStack>
          </FadeIn>
        </Grid>
      </Container>

      <Modal isOpen={isOpen} onClose={handleClose} isCentered motionPreset="slideInBottom">
        <ModalOverlay bg="blackAlpha.400" backdropFilter="blur(8px)" />
        <ModalContent
          layerStyle="glassLight"
          borderRadius="2px"
          mx={5}
          maxW="440px"
          py={2}
        >
          <ModalCloseButton color="oiva.cocoa" _hover={{ bg: "oiva.champagne" }} />
          <ModalBody pt={10} pb={6} px={{ base: 6, md: 8 }}>
            <VStack spacing={5} align="center" textAlign="center">
              <Box w="48px" h="1px" bg="oiva.gold" />
              <Text textStyle="label" color="oiva.rose">
                Message sent
              </Text>
              <Text
                as="h2"
                fontFamily="var(--font-playfair), 'Playfair Display', serif"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight={500}
                letterSpacing="0.04em"
                color="oiva.cocoa"
                lineHeight={1.2}
              >
                Thank you for reaching out
              </Text>
              <Text
                fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
                fontStyle="italic"
                fontSize={{ base: "md", md: "lg" }}
                color="oiva.rose"
                lineHeight={1.6}
              >
                We will respond within two business days.
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter justifyContent="center" pb={8} pt={0} px={{ base: 6, md: 8 }}>
            <Button variant="solid" size="md" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
