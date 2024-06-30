import {
  chakra,
  Flex,
  IconButton,
  LinkProps,
  SimpleGrid,
  useColorModeValue
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { type ReactNode, useState, useCallback } from "react";
import NextLink from "next/link";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

const NavLink = (props: NavLinkProps) => (
  <Link
    as={NextLink}
    fontSize={{ base: "30px", md: "inherit" }}
    paddingX={4}
    paddingY={1}
    rounded="md"
    variant="nav"
    _focus={{
      background: useColorModeValue("gray.100", "gray.700"),
      color: useColorModeValue("orange.shea", "white"),
      textDecoration: "none"
    }}
    _hover={{
      background: useColorModeValue("gray.100", "gray.700"),
      color: useColorModeValue("orange.shea", "white"),
      textDecoration: "none"
    }}
    {...props}
  >
    {props.children}
  </Link>
);

const Navigation = () => {
  const [display, changeDisplay] = useState<"none" | "flex">("none");

  const toggleMobileNav = useCallback(
    () => changeDisplay((oldState) => (oldState === "flex" ? "none" : "flex")),
    []
  );

  return (
    <SimpleGrid
      alignItems="center"
      as="nav"
      background={useColorModeValue("orange.shea", "gray.900")}
      columns={2}
      height={16}
      justifyContent="space-between"
      paddingX={4}
      position="fixed"
      spacing={10}
      width="100%"
      zIndex={100}
    >
      {/* Name */}
      <Flex justifyContent="flex-start">
        <NavLink href="/">
          <chakra.strong fontSize="20px" fontWeight="bold">
            Shea Belsky
          </chakra.strong>
        </NavLink>
      </Flex>

      {/* Mobile menu open icon */}
      <IconButton
        aria-label="Open Menu"
        display={{ base: "flex", md: "none" }}
        icon={<HamburgerIcon color="white" />}
        justifyContent="flex-end"
        onClick={toggleMobileNav}
        size="lg"
        variant="ghost"
      />

      {/* Mobile menu content */}
      <Flex
        backgroundColor={useColorModeValue("orange.shea", "gray.900")}
        display={display}
        flexDirection="column"
        height="100vh"
        left="0"
        overflowY="auto"
        position="fixed"
        top="0"
        width="100vw"
        zIndex={500}
      >
        <Flex justify="flex-end">
          <IconButton
            aria-label="Close Menu"
            icon={<CloseIcon color="white" />}
            marginRight={2}
            marginTop={2}
            onClick={toggleMobileNav}
            size="lg"
            variant="ghost"
          />
        </Flex>

        <Flex
          align="center"
          flexDirection="column"
          height="50%"
          justifyContent="space-between"
        >
          <NavLink
            href="/shea_belsky_one_sheet.pdf"
            isExternal
            onClick={toggleMobileNav}
          >
            One Sheet
          </NavLink>
          <NavLink href="/podcasts" onClick={toggleMobileNav}>
            Podcasts
          </NavLink>
          <NavLink href="/talks" onClick={toggleMobileNav}>
            Speaking
          </NavLink>
          <NavLink href="/news" onClick={toggleMobileNav}>
            In the News
          </NavLink>
          <NavLink href="/work" onClick={toggleMobileNav}>
            Work
          </NavLink>
        </Flex>
      </Flex>

      {/* Desktop menu items */}
      <Flex
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
      >
        <NavLink href="/shea_belsky_one_sheet.pdf" isExternal>
          One Sheet
        </NavLink>
        <NavLink href="/podcasts">Podcasts</NavLink>
        <NavLink href="/talks">Speaking</NavLink>
        <NavLink href="/news">In the News</NavLink>
        <NavLink href="/work">Work</NavLink>
      </Flex>
    </SimpleGrid>
  );
};

export default Navigation;
