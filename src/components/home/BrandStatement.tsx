import { Box, Container, Text, VStack } from "@chakra-ui/react";
import { brandStatement } from "@/data/site";
import { FadeIn } from "@/components/shared/FadeIn";

export function BrandStatement() {
  return (
    <Box as="section" py={{ base: 20, md: 28 }}>
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <FadeIn>
          <VStack spacing={0} maxW="640px" mx="auto" textAlign="center">
            <Text textStyle="body" fontSize={{ base: "md", md: "lg" }} lineHeight={1.8}>
              {brandStatement}
            </Text>
          </VStack>
        </FadeIn>
      </Container>
    </Box>
  );
}
