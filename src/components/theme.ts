import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const breakpoints = {
  base: "0px",
  md: "735px",
};

const theme = extendTheme({
  config,
  breakpoints,
  colors: {
    gray: {
      50: "#eceefb",
      100: "#ced2e3",
      200: "#afb6ce",
      300: "#909bbb",
      400: "#707fa7",
      500: "#57678e",
      600: "#43526f",
      700: "#303c50",
      800: "#1c2431",
      900: "#050b15",
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default theme;
