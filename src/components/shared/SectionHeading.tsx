import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { typeScale } from "@/theme/foundations/typography";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  as = "h2",
}: SectionHeadingProps) {
  const color = light ? "oiva.ivory" : "oiva.cocoa";
  const descColor = light ? "oiva.champagne" : "oiva.taupe";

  return (
    <VStack spacing={4} align={align === "center" ? "center" : "flex-start"} textAlign={align}>
      {eyebrow && (
        <Text
          fontFamily="var(--font-cormorant), 'Cormorant Garamond', serif"
          fontStyle="italic"
          fontSize={typeScale.italic}
          color={light ? "oiva.blush" : "oiva.rose"}
        >
          {eyebrow}
        </Text>
      )}
      <Heading as={as} textStyle="subhead" color={color} px={{ base: 1, md: 0 }} wordBreak="break-word">
        {title}
      </Heading>
      {description && (
        <Text textStyle="body" color={descColor} maxW="540px" px={{ base: 1, md: 0 }}>
          {description}
        </Text>
      )}
    </VStack>
  );
}
