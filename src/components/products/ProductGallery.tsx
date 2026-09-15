"use client";

import { Box, Flex, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const hasMany = images.length > 1;

  const goTo = useCallback((index: number) => {
    const next = (index + images.length) % images.length;
    setActive(next);
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.scrollTo({ left: next * scroller.clientWidth, behavior: "smooth" });
  }, [images.length]);

  const onScroll = () => {
    const scroller = scrollerRef.current;
    if (!scroller || !scroller.clientWidth) return;
    const i = Math.round(scroller.scrollLeft / scroller.clientWidth);
    if (i !== active && i >= 0 && i < images.length) setActive(i);
  };

  const galleryKey = images.join("|");

  useEffect(() => {
    setActive(0);
    scrollerRef.current?.scrollTo({ left: 0 });
  }, [galleryKey]);

  return (
    <Box w="full">
      <Box position="relative">
        <Flex
          ref={scrollerRef}
          onScroll={onScroll}
          overflowX="auto"
          overflowY="hidden"
          scrollSnapType="x mandatory"
          sx={{
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {images.map((src, i) => (
            <Box
              key={src}
              position="relative"
              flex="0 0 100%"
              w="full"
              aspectRatio={3 / 4}
              overflow="hidden"
              borderRadius="2px"
              bg="oiva.champagne"
              scrollSnapAlign="start"
              scrollSnapStop="always"
            >
              <Image
                src={src}
                alt={`${name} — view ${i + 1}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority={i === 0}
              />
            </Box>
          ))}
        </Flex>

        {hasMany && (
          <>
            <IconButton
              aria-label="Previous image"
              icon={<TbChevronLeft size={20} />}
              onClick={() => goTo(active - 1)}
              position="absolute"
              left={2}
              top="50%"
              transform="translateY(-50%)"
              size="sm"
              variant="ghost"
              bg="rgba(255, 235, 219, 0.88)"
              color="oiva.cocoa"
              _hover={{ bg: "oiva.ivory", color: "oiva.rose" }}
              borderRadius="2px"
            />
            <IconButton
              aria-label="Next image"
              icon={<TbChevronRight size={20} />}
              onClick={() => goTo(active + 1)}
              position="absolute"
              right={2}
              top="50%"
              transform="translateY(-50%)"
              size="sm"
              variant="ghost"
              bg="rgba(255, 235, 219, 0.88)"
              color="oiva.cocoa"
              _hover={{ bg: "oiva.ivory", color: "oiva.rose" }}
              borderRadius="2px"
            />
          </>
        )}
      </Box>

      {hasMany && (
        <Flex mt={3} gap={2} overflowX="auto" pb={1}>
          {images.map((src, i) => (
            <Box
              as="button"
              key={src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={i === active ? true : undefined}
              position="relative"
              flex="0 0 64px"
              w="64px"
              h="80px"
              overflow="hidden"
              borderRadius="2px"
              border="1px solid"
              borderColor={i === active ? "oiva.cocoa" : "oiva.hairline"}
              opacity={i === active ? 1 : 0.7}
              cursor="pointer"
              transition="border-color 0.2s ease-out, opacity 0.2s ease-out"
              _hover={{ opacity: 1, borderColor: "oiva.cocoa" }}
            >
              <Image src={src} alt="" fill sizes="64px" style={{ objectFit: "cover" }} />
            </Box>
          ))}
        </Flex>
      )}
    </Box>
  );
}
