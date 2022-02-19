import { Flex, Heading, Link, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

const HomeComponent = () => {
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
      <Flex
        flexDirection="column"
        order={{ base: 2, md: 1 }}
        width={{ base: "100%", md: "60%" }}
      >
        <Heading as="h1">Hi, I'm Shea Hunter Belsky!</Heading>
        <Text marginTop="20px">
          I'm an autistic software engineer, focused on building equity and
          inclusion for the neurodiverse.
        </Text>
        <Text marginTop="20px">
          I'm the Chief Technology Officer for{" "}
          <Link href="https://www.mentra.me" isExternal>
            Mentra
          </Link>
          , a startup connecting neurodiverse jobseekers with meaningful
          employment.
        </Text>
        <Text marginTop="20px">
          Let's get in touch through{" "}
          <Link href="https://www.linkedin.com/in/sheabelsky/" isExternal>
            LinkedIn
          </Link>{" "}
          or <Link href="mailto:hello@sheabelsky.com">email</Link>!
        </Text>
      </Flex>
      <Flex
        justifyContent="center"
        order={{ base: 1, md: 2 }}
        width={{ base: "100%", md: "30%" }}
      >
        <Image
          alt="Shea Belsky wearing a Pac-Man suit & tie against an orange background"
          height={200}
          layout="fixed"
          priority
          src="/shea_headshot.jpg"
          width={200}
        />
      </Flex>
    </Flex>
  );
};

export default HomeComponent;
