import { Box } from "@chakra-ui/react";
import works from "../data/works";
import { ExperienceStructure } from "./ExperienceStructure";

export const TimeLine = () => {
  const experiences = works;

  return (
    <Box>
      {experiences.map(experience => <ExperienceStructure work={experience} />)}
    </Box>
  );
};
