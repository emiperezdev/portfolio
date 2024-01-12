import { FaStarHalfAlt } from "react-icons/fa";
import { HeadingText } from "../HeadingText";
import { ProjectArticle } from "./ProjectArticle";

export const Projects = () => {
  return (
    <>
      <HeadingText id="projects" text="Projects" icon={FaStarHalfAlt} />
      <ProjectArticle />
    </>
  );
};
