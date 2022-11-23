import { ChakraProvider } from "@chakra-ui/react";
import BaseLayout from "../components/base_layout";
import chakraTheme from "../lib/theme";
import HomeComponent from "../app/home";

const HomePageOld = () => (
  <ChakraProvider theme={chakraTheme}>
    <BaseLayout>
      <HomeComponent />
    </BaseLayout>
  </ChakraProvider>
);

export default HomePageOld;
