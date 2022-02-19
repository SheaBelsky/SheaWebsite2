import { Fragment, ReactNode } from "react";
import { SkipNavContent, SkipNavLink } from "@chakra-ui/skip-nav";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Navigation from "./navigation";
import { NextSeo } from "next-seo";

interface Props {
  children: ReactNode;
  description: string;
  title: string;
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
          title: props.title,
          type: "website",
          url: typeof window !== "undefined" ? window.location.href : undefined
        }}
        title={props.title}
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
          {props.children}
        </Flex>
      </SkipNavContent>
    </Fragment>
  );
};

export default BaseLayout;
