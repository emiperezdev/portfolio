import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { TimeLine } from "./TimeLine";
import { HeadingText } from "../HeadingText";
import { Box } from "@chakra-ui/react";

export const ExperienceSection = () => {
  return (
    <Box as="section">
      <HeadingText
        id="experience"
        text="Experience"
        icon={PiSuitcaseSimpleFill}
      />
      <TimeLine />
    </Box>
  );
};
