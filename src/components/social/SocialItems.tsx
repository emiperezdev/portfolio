import { GridItem, SimpleGrid } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SocialItem } from "./SocialItem";
import { FaInstagram } from "react-icons/fa";
import useColorModeStore from "../../stores/colorModeStore";

export const SocialItems = () => {
  const isDark = useColorModeStore((s) => s.isDark);

  return (
    <SimpleGrid columns={{
      base: 1, md: 4
    }} spacing={{
      base: 3, md: 17
    }}>
      <GridItem>
        <SocialItem
          icon={FaLinkedin}
          sizeIcon="28px"
          link="https://www.linkedin.com/in/emiliano-p%C3%A9rez-247985219/"
          title="LinkedIn"
          color="#0284C7"
        />
      </GridItem>

      <SocialItem
        icon={FaGithub}
        sizeIcon="28px"
        title="GitHub"
        link="https://github.com/emiperezdev"
        color={isDark ? "#D2D4D7" : "#333333"}
      />

      <GridItem>
        <SocialItem
          icon={FaInstagram}
          link="https://www.instagram.com/emilianoperezm24/"
          sizeIcon="28px"
          title="Instagram"
          color="#ED1C76"
        />
      </GridItem>
    </SimpleGrid>
  );
};
