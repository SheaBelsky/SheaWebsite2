import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import type { WorkKey } from "../lib/work_data";

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
  <NextLink href={`/work/${props.workKey}`} passHref>
    <Box
      as="a"
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
      <Heading as="h2" fontWeight="extrabold" size="md">
        {props.company}
      </Heading>
      <Heading as="h3" size="sm">
        {props.title}
      </Heading>
      <Heading as="h4" fontWeight="light" size="xs">
        {props.dates}
      </Heading>
    </Box>
  </NextLink>
);

export default WorkRow;
