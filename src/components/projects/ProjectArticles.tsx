export const ProjectArticle = () => {
  return <></>;
};
import projects from "../../data/projects";
import { ProjectStructure } from "./ProjectStructure";

export const ProjectArticles = () => {
  const projectsList = projects;

  return (
    <div>
      {projectsList.map((project) => (
        <ProjectStructure project={project} />
      ))}
    </div>
  );
};
