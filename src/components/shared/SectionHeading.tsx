import { Box, Heading, Text, VStack } from "@chakra-ui/react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const color = light ? "oiva.ivory" : "oiva.cocoa";
  const descColor = light ? "oiva.champagne" : "oiva.taupe";

  return (
    <VStack spacing={4} align={align === "center" ? "center" : "flex-start"} textAlign={align}>
      {eyebrow && (
        <Text
          fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
          fontStyle="italic"
          fontSize={{ base: "lg", md: "xl" }}
          color={light ? "oiva.blush" : "oiva.rose"}
        >
          {eyebrow}
        </Text>
      )}
      <Heading as="h2" textStyle="subhead" color={color}>
        {title}
      </Heading>
      {description && (
        <Text textStyle="body" color={descColor} maxW="540px">
          {description}
        </Text>
      )}
    </VStack>
  );
}
