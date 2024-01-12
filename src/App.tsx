import "@fontsource/raleway/400.css";
import "@fontsource/open-sans/700.css";
import { Grid } from "@chakra-ui/react";
import { Media } from "./components/media/Media";
import { Border } from "./components/Border";
import "./App.css";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { NavBar } from "./components/NavBar/NavBar";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { SocialSection } from "./components/social/SocialSection";
import { EmailSection } from "./components/email/EmailSection";
import { SmallProject } from "./components/projects/SmallProject";

function App() {
  return (
    <>
      <Grid
        maxWidth="735px"
        paddingX={{ base: "20px", md: "0" }}
        margin="0 auto"
        position="relative"
        as='main'
      >
        <NavBar />
        <Media />
        <Border />
        <ExperienceSection />
        <ProjectsSection />
        <SmallProject />
        <SocialSection />
        <EmailSection />
      </Grid>
      <div className="background-gradient"></div>
    </>
  );
}

export default App;
