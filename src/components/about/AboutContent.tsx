"use client";

import { Box, Container, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { imageConfig } from "@/lib/images";
import { pillars } from "@/data/site";
import { EditorialQuote } from "@/components/shared/EditorialQuote";
import { FadeIn } from "@/components/shared/FadeIn";

const team = [
  { name: "Elena Voss", role: "Creative Director", imageIndex: 0 },
  { name: "Amélie Laurent", role: "Head of Atelier", imageIndex: 1 },
  { name: "Sofia Lindberg", role: "Materials Director", imageIndex: 2 },
];

export function AboutContent() {
  return (
    <Box pt={{ base: 28, md: 32 }} pb={{ base: 16, md: 24 }}>
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <FadeIn>
          <VStack spacing={6} maxW="720px" mx="auto" textAlign="center" mb={{ base: 16, md: 24 }}>
            <Text
              fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
              fontStyle="italic"
              fontSize="xl"
              color="oiva.rose"
            >
              our story
            </Text>
            <Heading as="h1" textStyle="displayLarge">
              The house of quiet intention
            </Heading>
          </VStack>
        </FadeIn>

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 8, md: 16 }}
          mb={{ base: 16, md: 24 }}
          alignItems="center"
        >
          <FadeIn>
            <Box position="relative" aspectRatio={4 / 5} overflow="hidden" borderRadius="2px">
              <Image
                src={imageConfig.about[0].src}
                alt={imageConfig.about[0].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </Box>
          </FadeIn>
          <FadeIn delay={0.1}>
            <VStack align="flex-start" spacing={6}>
              <Heading as="h2" textStyle="subhead">
                Founded on restraint
              </Heading>
              <Text textStyle="body">
                the OIVA began in a small atelier in Paris with a single question: what if a womenswear
                house made fewer pieces, but made them better? Not better in the sense of louder — better
                in the sense of more considered, more durable, more aligned with how women actually live.
              </Text>
              <Text textStyle="body">
                We draw from Parisian couture tradition — the respect for material, the precision of
                construction — and filter it through a Scandinavian sensibility that values calm, clarity,
                and the beauty of empty space.
              </Text>
            </VStack>
          </FadeIn>
        </Grid>

        <FadeIn>
          <EditorialQuote quote="We are not a brand among brands. We are the one you reach for when everything else feels like too much." />
        </FadeIn>

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 8, md: 16 }}
          mb={{ base: 16, md: 24 }}
          alignItems="center"
        >
          <FadeIn>
            <VStack align="flex-start" spacing={6} order={{ base: 2, md: 1 }}>
              <Heading as="h2" textStyle="subhead">
                Materials before silhouettes
              </Heading>
              <Text textStyle="body">
                Every collection begins with fabric, not sketch. We source washed silk, double-faced wool,
                and enzyme-treated linen from mills we visit personally — because the hand of a material
                determines everything that follows.
              </Text>
              <Text textStyle="body">
                Cut from a single length of silk, so the seam disappears into the movement. That is not
                a tagline — it is a construction principle we apply wherever the fabric allows.
              </Text>
            </VStack>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Box position="relative" aspectRatio={4 / 5} overflow="hidden" borderRadius="2px" order={{ base: 1, md: 2 }}>
              <Image
                src={imageConfig.about[1].src}
                alt={imageConfig.about[1].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </FadeIn>
        </Grid>

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 8, md: 16 }}
          mb={{ base: 16, md: 24 }}
          alignItems="center"
        >
          <FadeIn>
            <Box position="relative" aspectRatio={4 / 5} overflow="hidden" borderRadius="2px">
              <Image
                src={imageConfig.about[2].src}
                alt={imageConfig.about[2].alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </FadeIn>
          <FadeIn delay={0.1}>
            <VStack align="flex-start" spacing={6}>
              <Heading as="h2" textStyle="subhead">
                The meaning of &ldquo;the&rdquo;
              </Heading>
              <Text textStyle="body">
                The definite article in our name is deliberate. It signals singularity — one point of view,
                one standard of making. The lowercase treatment is intentional too: we offer our name quietly,
                as a suggestion rather than a declaration.
              </Text>
              <Text
                fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
                fontStyle="italic"
                fontSize="lg"
                color="oiva.rose"
              >
                the OIVA is a promise of considered making, long after the season has passed.
              </Text>
            </VStack>
          </FadeIn>
        </Grid>

        <FadeIn>
          <Box py={{ base: 12, md: 16 }} borderY="1px solid" borderColor="oiva.hairline" mb={{ base: 12, md: 16 }}>
            <Heading as="h2" textStyle="subhead" textAlign="center" mb={10}>
              Our values
            </Heading>
            <VStack spacing={8} maxW="640px" mx="auto">
              {pillars.map((pillar) => (
                <Box key={pillar.title}>
                  <Text textStyle="label" color="oiva.rose" mb={2}>
                    {pillar.title}
                  </Text>
                  <Text textStyle="body" fontSize="sm">
                    {pillar.description}
                  </Text>
                </Box>
              ))}
            </VStack>
          </Box>
        </FadeIn>

        <FadeIn>
          <Heading as="h2" textStyle="subhead" textAlign="center" mb={10}>
            The atelier
          </Heading>
        </FadeIn>
        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(3, 1fr)" }}
          gap={{ base: 8, md: 10 }}
          maxW="900px"
          mx="auto"
        >
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.1}>
              <VStack spacing={4}>
                <Box
                  position="relative"
                  w="full"
                  aspectRatio={4 / 5}
                  overflow="hidden"
                  borderRadius="2px"
                  bg="oiva.champagne"
                  sx={{ "& img": { transition: "transform 0.5s ease-out" } }}
                  _hover={{ "& img": { transform: "scale(1.03)" } }}
                >
                  <Image
                    src={imageConfig.team[member.imageIndex].src}
                    alt={imageConfig.team[member.imageIndex].alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
                <VStack spacing={1}>
                  <Text
                    fontFamily="var(--font-playfair), 'Playfair Display', serif"
                    fontSize="md"
                    fontWeight={500}
                    color="oiva.cocoa"
                  >
                    {member.name}
                  </Text>
                  <Text textStyle="caption">{member.role}</Text>
                </VStack>
              </VStack>
            </FadeIn>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
