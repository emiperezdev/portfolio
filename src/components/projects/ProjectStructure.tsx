import { Link, Heading, Button, Box, Image, Text } from "@chakra-ui/react";
import { Technologies } from "./TechnologyIcons";
import { Project } from "../../data/projects";

interface Props {
  project: Project;
}

export const ProjectStructure = ({ project }: Props) => {
  return (
    <Box marginBottom='38px'>
      <Link href={project.liveLink} target="_blank">
        <Image borderRadius="10px" src={project.image} />
      </Link>
      <Heading fontSize="xl" marginY="20px">
        {project.title}
      </Heading>
      <Text marginBottom="8px">{project.description}</Text>
      <Technologies icons={project.icons} />
      <Box marginTop="10px">
        <Link href={project.liveLink} target="_blank">
          <Button marginRight="10px">Live</Button>
        </Link>

        {project.codeLink ? (
          <Link href={project.codeLink} target="_blank">
            <Button marginRight="10px">Code</Button>
          </Link>
        ) : null}
      </Box>
    </Box>
  );
};
