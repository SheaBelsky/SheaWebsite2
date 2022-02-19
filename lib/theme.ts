import { extendTheme } from "@chakra-ui/react";

const chakraTheme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        _focus: {
          textDecoration: "underline"
        },
        _hover: {
          textDecoration: "underline"
        },
        color: "#D43900"
      },
      variants: {
        nav: {
          color: "white"
        }
      }
    }
  }
});

export default chakraTheme;
