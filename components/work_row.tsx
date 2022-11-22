import type { WorkKey } from "../lib/work_data";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  backgroundColor: string;
  company: string;
  dates: string;
  title: string;
  workKey: WorkKey;
}

// TODO: Could optimize this by creating a custom Box variant
// and moving shared styles there, that way we don't generate a new CSS
// class for every row
const WorkRow = (props: Props) => (
  <Box
    aria-label={`${props.company}, ${props.title}, ${props.dates}`}
    as={NextLink}
    href={`/work/${props.workKey}`}
    backgroundColor={props.backgroundColor}
    color={useColorModeValue("white", "white")}
    display="inline"
    padding="20px 10px"
    _focus={{
      opacity: 0.7
    }}
    _hover={{
      opacity: 0.7
    }}
    transition="0.1s opacity linear"
  >
    <Heading as="span" display="block" fontWeight="extrabold" size="md">
      {props.company}
    </Heading>
    <Heading as="span" display="block" size="sm">
      {props.title}
    </Heading>
    <Heading as="span" display="block" fontWeight="light" size="xs">
      {props.dates}
    </Heading>
  </Box>
);

export default WorkRow;
