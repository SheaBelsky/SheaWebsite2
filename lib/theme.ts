import { extendTheme } from "@chakra-ui/react";

const chakraTheme = extendTheme({
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
  }
});

export default chakraTheme;
