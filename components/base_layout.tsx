"use client";
import { Flex, StyleProps, useColorModeValue } from "@chakra-ui/react";
import { Fragment, ReactNode } from "react";
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";
import Navigation from "./navigation";

interface Props {
  children: ReactNode;
  wrapperStyleProps?: StyleProps;
}

const BaseLayout = (props: Props) => {
  return (
    <Fragment>
      <SkipNavLink>Skip to main content</SkipNavLink>
      <Navigation />
      <SkipNavContent>
        <Flex
          as="main"
          justifyContent="center"
          margin="auto"
          maxWidth={{
            base: "90%",
            md: "1000px"
          }}
          position="relative"
          top={24}
        >
          <Flex
            alignItems="center"
            backgroundColor={useColorModeValue("gray.100", "black")}
            borderRadius="5px"
            flexDirection="column"
            padding="20px"
            width="80%"
            {...(props.wrapperStyleProps || {})}
          >
            {props.children}
          </Flex>
        </Flex>
      </SkipNavContent>
    </Fragment>
  );
};

export default BaseLayout;
