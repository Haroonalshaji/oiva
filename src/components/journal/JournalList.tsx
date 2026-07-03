"use client";

import { Box, Container, Grid, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { posts } from "@/data/posts";
import { postImage } from "@/lib/images";
import { formatDate } from "@/lib/utils";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";

export function JournalList() {
  return (
    <Box pt={{ base: 28, md: 32 }} pb={{ base: 16, md: 24 }}>
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <FadeIn>
          <SectionHeading
            title="The journal"
            description="Notes on craft, style, and quiet living"
          />
        </FadeIn>

        <Grid
          templateColumns={{ base: "1fr", sm: "1fr 1fr", lg: "repeat(3, 1fr)" }}
          gap={{ base: 8, md: 10 }}
          mt={12}
        >
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={(i % 3) * 0.1}>
              <Link
                as={NextLink}
                href={`/journal/${post.slug}`}
                _hover={{ textDecoration: "none" }}
                role="group"
              >
                <VStack align="stretch" spacing={4}>
                  <Box
                    position="relative"
                    aspectRatio={16 / 10}
                    overflow="hidden"
                    borderRadius="2px"
                    bg="oiva.champagne"
                    sx={{ "& img": { transition: "transform 0.5s ease-out" } }}
                    _groupHover={{ "& img": { transform: "scale(1.03)" } }}
                  >
                    <Image
                      src={postImage(post.slug)}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <VStack align="flex-start" spacing={2}>
                    <Text textStyle="label" color="oiva.rose" fontSize="0.625rem">
                      {post.category}
                    </Text>
                    <Text
                      fontFamily="var(--font-playfair), 'Playfair Display', serif"
                      fontSize={{ base: "md", md: "lg" }}
                      fontWeight={500}
                      color="oiva.cocoa"
                      lineHeight={1.3}
                    >
                      {post.title}
                    </Text>
                    <Text textStyle="body" fontSize="sm" noOfLines={2}>
                      {post.excerpt}
                    </Text>
                    <Text textStyle="caption">{formatDate(post.date)}</Text>
                  </VStack>
                </VStack>
              </Link>
            </FadeIn>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
