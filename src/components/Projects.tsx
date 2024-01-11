import { HStack, Heading, Icon } from "@chakra-ui/react";
import { FaStarHalfAlt } from "react-icons/fa";
import { ProjectArticle } from "./ProjectArticle";

export const Projects = () => {
  return (
    <>
      <HStack id="projects" marginTop="80px" marginBottom='40px'>
        <Heading fontSize={{ base: "2xl", md: "3xl" }}>Projects</Heading>
        <Icon marginLeft="10px" boxSize="32px" as={FaStarHalfAlt} />
      </HStack>
      <ProjectArticle />
    </>
  );
};
