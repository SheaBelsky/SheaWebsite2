import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  backgroundColor: string;
  dates: string;
  href: string;
  linkVariant: "next" | "basic";
  subtitle: string;
  title: string;
}

const WorkRow = (props: Props) => (
  <Box
    aria-label={`${props.title}, ${props.subtitle}, ${props.dates}${
      props.linkVariant === "basic" ? " (Opens in a new tab)" : ""
    }`}
    as={props.linkVariant === "next" ? NextLink : "a"}
    href={props.href}
    backgroundColor={props.backgroundColor}
    color={useColorModeValue("white", "white")}
    cursor="pointer"
    display="inline"
    padding="20px 10px"
    _focus={{
      opacity: 0.7
    }}
    _hover={{
      opacity: 0.7
    }}
    transition="0.1s opacity linear"
    {...(props.linkVariant === "basic" && {
      rel: "noopener noreferrer",
      target: "_blank"
    })}
  >
    <Heading
      as="span"
      display="block"
      fontWeight="extrabold"
      minHeight="72px"
      size="md"
    >
      {props.title}
    </Heading>
    <Heading as="span" display="block" paddingY={2} size="sm">
      {props.subtitle}
    </Heading>
    <Heading as="span" display="block" fontWeight="light" size="xs">
      {props.dates}
    </Heading>
  </Box>
);

export default WorkRow;
