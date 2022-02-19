import { Flex, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

const PhotographyComponent = () => {
  return (
    <Flex
      alignItems="center"
      alignSelf="center"
      backgroundColor={useColorModeValue("gray.100", "black")}
      borderRadius="5px"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="center"
      justifySelf="center"
      marginTop={{ base: "100px", md: "0" }}
      padding="20px"
      width="80%"
    >
      <Heading>Photography</Heading>
    </Flex>
  );
};

export default PhotographyComponent;
