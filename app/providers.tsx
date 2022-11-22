"use client";
import { Fragment, ReactNode } from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import chakraTheme from "../lib/theme";
import BaseLayout from "../components/base_layout";

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => {
  return (
    <Fragment>
      <ColorModeScript initialColorMode={chakraTheme.initialColorMode} />
      <ChakraProvider resetCSS theme={chakraTheme}>
        <BaseLayout>{props.children}</BaseLayout>
      </ChakraProvider>
    </Fragment>
  );
};

export default Providers;
