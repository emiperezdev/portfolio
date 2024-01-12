import { FaStarHalfAlt } from "react-icons/fa";
import { HeadingText } from "../HeadingText";
import { ProjectArticles } from "./ProjectArticles";

export const Projects = () => {
  return (
    <>
      <HeadingText id="projects" text="Projects" icon={FaStarHalfAlt} />
      <ProjectArticles />
    </>
  );
};
