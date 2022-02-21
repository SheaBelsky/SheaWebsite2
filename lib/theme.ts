import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const chakraTheme: ThemeConfig = extendTheme({
  colors: {
    orange: {
      shea: "#D43900"
    }
  },
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
  },
  initialColorMode: "system",
  useSystemColorMode: true
});

export default chakraTheme;
