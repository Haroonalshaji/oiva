import { Box, Text, VStack } from "@chakra-ui/react";

interface EditorialQuoteProps {
  quote: string;
  light?: boolean;
}

export function EditorialQuote({ quote, light = false }: EditorialQuoteProps) {
  return (
    <VStack spacing={8} py={{ base: 12, md: 16 }} px={6} maxW="720px" mx="auto">
      <Box w="48px" h="1px" bg={light ? "oiva.champagne" : "oiva.hairline"} />
      <Text
        as="blockquote"
        fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
        fontStyle="italic"
        fontSize={{ base: "xl", md: "2xl" }}
        lineHeight={1.4}
        textAlign="center"
        color={light ? "oiva.ivory" : "oiva.cocoa"}
      >
        {quote}
      </Text>
      <Box w="48px" h="1px" bg={light ? "oiva.champagne" : "oiva.hairline"} />
    </VStack>
  );
}
