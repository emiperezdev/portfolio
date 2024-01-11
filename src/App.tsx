import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import { Grid } from "@chakra-ui/react";
import { Media } from "./components/Media";
import { Border } from "./components/Border";
import "./App.css";
import { Experience } from "./components/Experience";
import { NavBar } from "./components/NavBar/NavBar";
import { Projects } from "./components/Projects";
import { Social } from "./components/Social";
import { Email } from "./components/Email";
import { SmallProject } from "./components/SmallProject";

function App() {
  return (
    <>
      <Grid
        maxWidth="735px"
        paddingX={{ base: "20px", md: "0" }}
        margin="0 auto"
        position='relative'
      >
        <NavBar />
        <Media />
        <Border />
        <Experience />
        <Projects />
        <SmallProject />
        <Social />
        <Email />
      </Grid>
      <div className="background-gradient"></div>
    </>
  );
}

export default App;
