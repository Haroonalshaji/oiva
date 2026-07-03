import { Box, Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { pillars } from "@/data/site";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

export function Pillars() {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="oiva.pearl" borderY="1px solid" borderColor="oiva.hairline">
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <FadeIn>
          <SectionHeading title="Our pillars" />
        </FadeIn>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 8, md: 10 }} mt={12}>
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <VStack align="flex-start" spacing={4}>
                <Text textStyle="label" color="oiva.rose">
                  {pillar.title}
                </Text>
                <Text textStyle="body" fontSize="sm">
                  {pillar.description}
                </Text>
              </VStack>
            </FadeIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
