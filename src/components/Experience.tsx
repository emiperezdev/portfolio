import { HStack, Heading, Icon } from "@chakra-ui/react";
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { TimeLine } from "./TimeLine";

export const Experience = () => {
  return (
    <>
      <HStack id="experience" marginTop="80px" marginBottom='40px'>
        <Heading fontSize={{ base: "2xl", md: "3xl" }}>Experience</Heading>
        <Icon
          marginLeft="10px"
          marginTop="4px"
          boxSize="35px"
          as={PiSuitcaseSimpleFill}
        />
      </HStack>
      <TimeLine />
    </>
  );
};
