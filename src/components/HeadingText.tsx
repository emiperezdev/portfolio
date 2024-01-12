import { HStack, Heading, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  text: string;
  id?: string;
}

export const HeadingText = ({ icon, text, id }: Props) => {
  return (
    <HStack id={id} marginTop="80px" marginBottom="40px">
      <Heading fontSize={{ base: "2xl", md: "3xl" }}>{text}</Heading>
      <Icon marginLeft="10px" marginTop="4px" boxSize="35px" as={icon} />
    </HStack>
  );
};
