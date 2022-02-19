import { Box, Heading, useColorModeValue } from "@chakra-ui/react";

interface Props {
  backgroundColor: string;
  company: string;
  dates: string;
  title: string;
}

const WorkRow = (props: Props) => {
  return (
    <Box
      backgroundColor={props.backgroundColor}
      color={useColorModeValue("white", "white")}
      display="inline"
      // marginY="5px"
      padding="20px 10px"
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
  );
};

export default WorkRow;
