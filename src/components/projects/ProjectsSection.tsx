import { FaStarHalfAlt } from "react-icons/fa";
import { HeadingText } from "../HeadingText";
import { ProjectArticles } from "./ProjectArticles";
import { Box } from "@chakra-ui/react";

export const ProjectsSection = () => {
  return (
    <Box as="section" marginTop={'-50px'}>
      <HeadingText id="projects" text="Projects" icon={FaStarHalfAlt} />
      <ProjectArticles />
    </Box>
  );
};
