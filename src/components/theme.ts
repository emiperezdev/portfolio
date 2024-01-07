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
      50: "#ecebfc",
      100: "#cac9e8",
      200: "#a8a7d6",
      300: "#8484c6",
      400: "#6164b5",
      500: "#484d9d",
      600: "#373e7a",
      700: "#272e57",
      800: "#171c36",
      900: "#070816",
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default theme;
