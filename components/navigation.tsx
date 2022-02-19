import {
  Button,
  chakra,
  Flex,
  IconButton,
  Link,
  LinkProps,
  SimpleGrid,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ReactNode, useState } from "react";
import NextLink from "next/link";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

const NavLink = (props: NavLinkProps) => (
  <NextLink href={props.href} passHref>
    <Link
      fontSize={{ base: "30px", md: "inherit" }}
      paddingX={2}
      paddingY={1}
      rounded="md"
      variant="nav"
      _focus={{
        background: useColorModeValue("gray.100", "gray.700"),
        color: useColorModeValue("#D43900", "white"),
        textDecoration: "none"
      }}
      _hover={{
        background: useColorModeValue("gray.100", "gray.700"),
        color: useColorModeValue("#D43900", "white"),
        textDecoration: "none"
      }}
      {...props}
    >
      {props.children}
    </Link>
  </NextLink>
);

const Navigation = () => {
  // TODO: Set color mode based on prefers-color-scheme
  const { colorMode, toggleColorMode } = useColorMode();
  const [display, changeDisplay] = useState("none");

  return (
    <SimpleGrid
      alignItems="center"
      as="nav"
      background={useColorModeValue("#D43900", "gray.900")}
      columns={{ base: 2, md: 3 }}
      height={16}
      justifyContent="space-between"
      spacing={10}
      paddingX={4}
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
        onClick={() => changeDisplay("flex")}
        size="lg"
        variant="ghost"
      />

      {/* Mobile menu content */}
      <Flex
        backgroundColor={useColorModeValue("#D43900", "gray.900")}
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
            onClick={() => changeDisplay("none")}
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
          <NavLink href="/photography">Photography</NavLink>
          <NavLink href="/resume" isExternal>
            Resumé
          </NavLink>
          <NavLink href="/work">Work</NavLink>
        </Flex>
      </Flex>

      {/* Desktop menu items */}
      <Flex
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
      >
        <NavLink href="/photography">Photography</NavLink>
        <NavLink href="/resume" isExternal>
          Resumé
        </NavLink>
        <NavLink href="/work">Work</NavLink>
      </Flex>

      {/* Desktop Light/Dark Mode toggle */}
      <Flex display={{ base: "none", md: "flex" }} justifyContent="flex-end">
        <Button
          aria-label={
            colorMode === "light" ? "Turn to dark mode" : "Turn to light mode"
          }
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </SimpleGrid>
  );
};

export default Navigation;
