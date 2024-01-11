import { HStack, Heading, Icon } from "@chakra-ui/react";
import { MdAlternateEmail } from "react-icons/md";
import { SocialItems } from "./SocialItems";

export const Social = () => {
  return (
    <>
      <HStack marginTop="80px" marginBottom="40px">
        <Heading fontSize={{ base: "2xl", md: "3xl" }}>Social</Heading>
        <Icon marginLeft="9px" boxSize="36px" as={MdAlternateEmail} />
      </HStack>

      <SocialItems />
    </>
  );
};
