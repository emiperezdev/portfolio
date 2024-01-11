import { FaStarHalfAlt } from "react-icons/fa";
import { ProjectArticle } from "./ProjectArticle";
import { HeadingText } from "./HeadingText";

export const Projects = () => {
  return (
    <>
      <HeadingText id="projects" text="Projects" icon={FaStarHalfAlt} />
      <ProjectArticle />
    </>
  );
};
