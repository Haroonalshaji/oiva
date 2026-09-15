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
import NextLink from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { TbShoppingBag } from "react-icons/tb";
import { navItems } from "@/data/site";
import { useCart } from "@/components/cart/CartProvider";

function BagButton() {
  const { itemCount, openCart } = useCart();

  return (
    <Box position="relative">
      <IconButton
        aria-label={itemCount ? `Open bag, ${itemCount} items` : "Open bag"}
        icon={<TbShoppingBag size={18} strokeWidth={1.5} />}
        variant="ghost"
        color="oiva.cocoa"
        _hover={{ color: "oiva.rose", bg: "transparent" }}
        size="sm"
        transition="color 0.3s ease-out"
        onClick={openCart}
      />
      {itemCount > 0 && (
        <Text
          as="span"
          position="absolute"
          top="2px"
          right="2px"
          minW="14px"
          h="14px"
          px="3px"
          bg="oiva.cocoa"
          color="oiva.ivory"
          fontSize="9px"
          lineHeight="14px"
          textAlign="center"
          borderRadius="full"
          pointerEvents="none"
          sx={{ fontVariantNumeric: "tabular-nums" }}
        >
          {itemCount > 99 ? "99+" : itemCount}
        </Text>
      )}
    </Box>
  );
}

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
        layerStyle="glassLight"
        borderBottom="1px solid"
        borderColor="rgba(255, 255, 255, 0.45)"
      >
        <Container maxW="1440px" px={{ base: 4, sm: 5, md: 10 }} py={{ base: 2.5, md: 4 }}>
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

            <Box flex={{ base: 1, lg: "none" }} textAlign={{ base: "left", lg: "center" }} minW={0} pr={2}>
              <Link
                as={NextLink}
                href="/"
                onClick={onClose}
                aria-label="Oivah Feminine Atelier home"
                display="inline-block"
                h={{ base: "48px", sm: "56px", md: "68px" }}
                maxW={{ base: "150px", sm: "180px", md: "220px" }}
              >
                <Box
                  as="img"
                  src="/logo/oivah-lockup-dark.svg"
                  alt="Oivah Feminine Atelier"
                  h="100%"
                  w="auto"
                  maxW="100%"
                  display="block"
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
              <BagButton />
            </HStack>

            <HStack spacing={4} display={{ base: "flex", lg: "none" }}>
              <BagButton />
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
            <Box
              position="absolute"
              inset={0}
              bg="rgba(255, 235, 219, 0.92)"
              backdropFilter="blur(20px) saturate(140%)"
              sx={{ WebkitBackdropFilter: "blur(20px) saturate(140%)" }}
            />
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
                    fontSize={{ base: "0.8125rem", md: "0.875rem" }}
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
