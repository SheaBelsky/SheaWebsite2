"use client";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Fragment, ReactNode } from "react";
import BaseLayout from "../components/base_layout";
import chakraTheme from "../lib/theme";

interface Props {
  children: ReactNode;
}

const Providers = (props: Props) => (
  <Fragment>
    <ColorModeScript initialColorMode={chakraTheme.initialColorMode} />
    <ChakraProvider resetCSS theme={chakraTheme}>
      <BaseLayout>{props.children}</BaseLayout>
    </ChakraProvider>
  </Fragment>
);

export default Providers;
