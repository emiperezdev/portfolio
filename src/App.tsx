import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import { Grid, Text } from "@chakra-ui/react";
import { Media } from "./components/Media";
import { Border } from "./components/Border";
import "./App.css";
import { Experience } from "./components/Experience";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Grid
        paddingX={{ base: "20px", md: "0" }}
        maxWidth="735px"
        margin="0 auto"
      >
        <NavBar />
        <Media />
        <Border />
        <Experience />
      </Grid>
      <div className="background-gradient"></div>
    </>
  );
}

export default App;
