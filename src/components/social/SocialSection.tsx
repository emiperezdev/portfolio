import { MdAlternateEmail } from "react-icons/md";
import { SocialItems } from "./SocialItems";
import { HeadingText } from "../HeadingText";
import { Box } from "@chakra-ui/react";

export const SocialSection = () => {
  return (
    <Box as="section">
      <HeadingText id="contact" text="Social" icon={MdAlternateEmail} />
      <SocialItems />
    </Box>
  );
};
