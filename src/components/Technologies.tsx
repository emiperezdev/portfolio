import { HStack, Icon } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { SiChakraui, SiTypescript } from "react-icons/si";

export const Technologies = () => {
  const size = 25;
  return (
    <HStack spacing="15px" marginBottom='8px' >
      <Icon boxSize={size + "px"} color="#00c6f7" as={FaReact} />

      <Icon boxSize={size + "px"} color="#2F74C0" as={SiTypescript} />

      <Icon boxSize={size + "px"} color="#25BAAC" as={SiChakraui} />
    </HStack>
  );
};
