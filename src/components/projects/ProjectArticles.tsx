import { Box } from "@chakra-ui/react";
import projects from "../../data/projects";
import { ProjectStructure } from "./ProjectStructure";

export const ProjectArticles = () => {
  const projectsList = projects;

  return (
    <Box as="article">
      {projectsList.map((project) => (
        <ProjectStructure key={project.title} project={project} />
      ))}
    </Box>
  );
};
