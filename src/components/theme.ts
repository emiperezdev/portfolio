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
      50: "#e6edff",
      100: "#c3d1ef",
      200: "#9eb5e1",
      300: "#789bd5",
      400: "#5484c9",
      500: "#3c6eaf",
      600: "#2e5988",
      700: "#204262",
      800: "#10293c",
      900: "#000d18",
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default theme;


