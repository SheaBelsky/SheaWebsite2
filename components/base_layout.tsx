import { Flex, StyleProps, useColorModeValue } from "@chakra-ui/react";
import { Fragment, ReactNode } from "react";
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";
import Head from "next/head";
import Navigation from "./navigation";
import { NextSeo } from "next-seo";

interface Props {
  children: ReactNode;
  description: string;
  title: string;
  wrapperStyleProps?: StyleProps;
}

const BaseLayout = (props: Props) => {
  const description = `Shea Belsky${
    props.description ? ` - ${props.description}` : ""
  }`;
  return (
    <Fragment>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="Belsky, Shea, Shea Belsky, Shea Hunter Belsky, Shea H Belsky, shea belsky, shbelsky, sbelsky, sheabelsky, SHEA BELSKY, Mentra, AxisAbility"
        />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="orange.shea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextSeo
        description={description}
        openGraph={{
          description,
          title: `Shea Belsky - ${props.title}`,
          type: "website",
          url: typeof window !== "undefined" ? window.location.href : undefined
        }}
        title={`Shea Belsky - ${props.title}`}
      />
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
