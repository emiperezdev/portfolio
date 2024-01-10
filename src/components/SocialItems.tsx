import { HStack } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SocialItem } from "./SocialItem";
import { IoLogoWhatsapp } from "react-icons/io";
import useColorModeStore from "../stores/colorModeStore";

export const SocialItems = () => {
  const isDark = useColorModeStore(s => s.isDark);

  return (
    <HStack spacing={17}>
      <SocialItem
        icon={FaLinkedin}
        sizeIcon="28px"
        title="LinkedIn"
        color="#0284C7"
      />

      <SocialItem
        icon={FaGithub}
        sizeIcon="28px"
        title="GitHub"
        color={isDark ? "#D2D4D7" : "#333333"}
      />

      <SocialItem
        icon={IoLogoWhatsapp}
        sizeIcon="28px"
        title="WhatsApp"
        color="#32D851"
      />
    </HStack>
  );
};
