"use client";

import { Box, Container, Grid, Link, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { getRelatedPosts } from "@/data/posts";
import { postImage } from "@/lib/images";
import { formatDate } from "@/lib/utils";
import type { JournalPost as JournalPostType } from "@/types";
import { EditorialQuote } from "@/components/shared/EditorialQuote";
import { FadeIn } from "@/components/shared/FadeIn";

interface JournalPostProps {
  post: JournalPostType;
}

export function JournalPost({ post }: JournalPostProps) {
  const related = getRelatedPosts(post.slug);

  return (
    <Box pt={{ base: 28, md: 32 }} pb={{ base: 16, md: 24 }}>
      <Container maxW="1440px" px={{ base: 5, md: 10 }}>
        <FadeIn>
          <Box
            position="relative"
            w="full"
            aspectRatio={{ base: 16 / 9, md: 21 / 9 }}
            overflow="hidden"
            borderRadius="2px"
            mb={{ base: 10, md: 14 }}
          >
            <Image
              src={postImage(post.slug)}
              alt={post.title}
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>
        </FadeIn>

        <Box maxW="680px" mx="auto">
          <FadeIn>
            <VStack align="flex-start" spacing={4} mb={10}>
              <Text textStyle="label" color="oiva.rose">
                {post.category}
              </Text>
              <Text
                as="h1"
                fontFamily="var(--font-playfair), 'Playfair Display', serif"
                fontSize={{ base: "1.75rem", sm: "2rem", md: "2.75rem" }}
                fontWeight={500}
                letterSpacing="0.02em"
                lineHeight={1.2}
                color="oiva.cocoa"
              >
                {post.title}
              </Text>
              <Text textStyle="caption">
                {post.author} &middot; {formatDate(post.date)}
              </Text>
            </VStack>
          </FadeIn>

          <VStack align="stretch" spacing={6}>
            {post.content.map((paragraph, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                {post.pullQuote && i === 2 ? (
                  <>
                    <EditorialQuote quote={post.pullQuote} />
                    <Text textStyle="body">{paragraph}</Text>
                  </>
                ) : (
                  <Text textStyle="body">{paragraph}</Text>
                )}
              </FadeIn>
            ))}
          </VStack>
        </Box>

        {related.length > 0 && (
          <FadeIn>
            <Box mt={{ base: 16, md: 24 }} pt={{ base: 12, md: 16 }} borderTop="1px solid" borderColor="oiva.hairline">
              <Text textStyle="label" textAlign="center" mb={10}>
                Related reading
              </Text>
              <Grid
                templateColumns={{ base: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" }}
                gap={8}
                maxW="960px"
                mx="auto"
              >
                {related.map((r) => (
                  <Link key={r.slug} as={NextLink} href={`/journal/${r.slug}`} _hover={{ textDecoration: "none" }}>
                    <VStack align="flex-start" spacing={0}>
                      <Text textStyle="label" color="oiva.rose" fontSize="0.625rem" mb={2}>
                        {r.category}
                      </Text>
                      <Text
                        fontFamily="var(--font-playfair), 'Playfair Display', serif"
                        fontSize="md"
                        fontWeight={500}
                        color="oiva.cocoa"
                      >
                        {r.title}
                      </Text>
                    </VStack>
                  </Link>
                ))}
              </Grid>
            </Box>
          </FadeIn>
        )}
      </Container>
    </Box>
  );
}
