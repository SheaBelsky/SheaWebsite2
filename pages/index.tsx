import { ChakraProvider } from "@chakra-ui/react";
import BaseLayout from "../components/base_layout";
import chakraTheme from "../lib/theme";
import HomeComponent from "../app/home";
import Head from "next/head";

const HomePageOld = () => (
  <ChakraProvider theme={chakraTheme}>
    <Head>
      <title>Shea Belsky</title>
    </Head>
    <BaseLayout>
      <HomeComponent />
    </BaseLayout>
  </ChakraProvider>
);

export default HomePageOld;
