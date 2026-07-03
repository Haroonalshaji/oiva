"use client";

import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import NextLink from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { TbShoppingBag } from "react-icons/tb";
import { navItems } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const isHome = pathname === "/";

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  return (
    <>
      <Box
        as="header"
        position={isHome ? "fixed" : "sticky"}
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg="oiva.ivory"
        borderBottom="1px solid"
        borderColor="oiva.hairline"
      >
        <Container maxW="1440px" px={{ base: 5, md: 10 }} py={{ base: 3, md: 4 }}>
          <Flex align="center" justify="space-between">
            <HStack spacing={8} display={{ base: "none", lg: "flex" }} flex={1}>
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.href}
                  as={NextLink}
                  href={item.href}
                  textStyle="navLink"
                  color={pathname === item.href ? "oiva.rose" : "oiva.cocoa"}
                  _hover={{ color: "oiva.rose", textDecoration: "none" }}
                  transition="color 0.3s ease-out"
                >
                  {item.label}
                </Link>
              ))}
            </HStack>

            <Box flex={{ base: 1, lg: "none" }} textAlign={{ base: "left", lg: "center" }}>
              <Link
                as={NextLink}
                href="/"
                onClick={onClose}
                aria-label="the OIVA home"
                display="inline-block"
                h={{ base: "48px", md: "56px" }}
              >
                <Image
                  src="/logo/oiva-logo-primary.png"
                  alt="the OIVA"
                  width={220}
                  height={80}
                  priority
                  style={{ height: "100%", width: "auto" }}
                />
              </Link>
            </Box>

            <HStack spacing={8} display={{ base: "none", lg: "flex" }} flex={1} justify="flex-end">
              {navItems.slice(2).map((item) => (
                <Link
                  key={item.href}
                  as={NextLink}
                  href={item.href}
                  textStyle="navLink"
                  color={pathname === item.href ? "oiva.rose" : "oiva.cocoa"}
                  _hover={{ color: "oiva.rose", textDecoration: "none" }}
                  transition="color 0.3s ease-out"
                >
                  {item.label}
                </Link>
              ))}
              <IconButton
                aria-label="Shopping bag"
                icon={<TbShoppingBag size={18} strokeWidth={1.5} />}
                variant="ghost"
                color="oiva.cocoa"
                _hover={{ color: "oiva.rose", bg: "transparent" }}
                size="sm"
                transition="color 0.3s ease-out"
              />
            </HStack>

            <HStack spacing={4} display={{ base: "flex", lg: "none" }}>
              <IconButton
                aria-label="Shopping bag"
                icon={<TbShoppingBag size={18} strokeWidth={1.5} />}
                variant="ghost"
                color="oiva.cocoa"
                _hover={{ bg: "transparent" }}
                size="sm"
              />
              <Text
                as="button"
                textStyle="label"
                color="oiva.cocoa"
                cursor="pointer"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? "Close" : "Menu"}
              </Text>
            </HStack>
          </Flex>
        </Container>
      </Box>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box position="absolute" inset={0} bg="oiva.ivory" />
            <VStack spacing={8} position="relative" zIndex={1}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 * i, ease: "easeOut" }}
                >
                  <Link
                    as={NextLink}
                    href={item.href}
                    onClick={onClose}
                    textStyle="navLink"
                    fontSize="sm"
                    letterSpacing="0.2em"
                    color={pathname === item.href ? "oiva.rose" : "oiva.cocoa"}
                    _hover={{ color: "oiva.rose", textDecoration: "none" }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </VStack>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
