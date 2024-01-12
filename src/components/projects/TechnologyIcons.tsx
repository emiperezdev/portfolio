import { HStack } from "@chakra-ui/react";
import { IconTech } from "../../data/projects";
import { TechnologyIcon } from "./TechnologyIcon";

interface Props {
  icons: IconTech[];
}

export const Technologies = ({ icons }: Props) => {
  return (
    <HStack spacing="15px" marginBottom="8px">
      {icons.map((icon) => (
        <TechnologyIcon key={crypto.randomUUID()} icon={icon} />
      ))}
    </HStack>
  );
};
