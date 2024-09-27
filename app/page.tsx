"use client";

import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Image, Link } from "@chakra-ui/next-js";

const HomeComponent = () => (
  <Box
    display="flex"
    flexDirection={{ base: "column", md: "row" }}
    justifyContent="space-between"
  >
    <Flex
      flexDirection="column"
      order={{ base: 2, md: 1 }}
      width={{ base: "100%", md: "60%" }}
    >
      <Heading as="h1">Hi, I'm Shea Hunter Belsky!</Heading>
      <Text marginTop="20px">
        I'm an autistic software engineer, focused on building equity and
        inclusion for everyone.
      </Text>
      <Text marginTop="20px">
        Currently I work at HubSpot as a Senior Software Engineer II for the
        Service Hub team.
      </Text>
      <Text marginTop="20px">
        I'm the former Chief Technology Officer for{" "}
        <Link href="https://www.mentra.com" isExternal>
          Mentra
        </Link>
        , a startup connecting neurodivergent jobseekers with meaningful
        employment.
      </Text>
      <Text marginTop="20px">
        Let's get in touch through{" "}
        <Link href="https://www.linkedin.com/in/sheabelsky/" isExternal>
          LinkedIn
        </Link>{" "}
        !
      </Text>
    </Flex>
    <Flex order={{ base: 1, md: 2 }} width={{ base: "100%", md: "30%" }}>
      <Box alignItems="center" display="flex" justifyContent="center">
        <Image
          alt="Shea Belsky wearing a red suit, black shirt, and black tie against a beige background."
          height="200"
          priority
          src="/shea_headshot.jpg"
          width="200"
        />
      </Box>
    </Flex>
  </Box>
);

export default HomeComponent;
