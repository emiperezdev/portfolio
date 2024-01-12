import { Box } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { EmailInput } from "./EmailInput";
import { HeadingText } from "../HeadingText";

export const EmailSection = () => {
  return (
    <Box as="section">
      <HeadingText text="Email" icon={MdOutlineEmail} />
      <EmailInput />

      <Box marginBottom="60px" />
    </Box>
  );
};
