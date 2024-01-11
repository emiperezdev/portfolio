import { Box } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { EmailInput } from "./EmailInput";
import { HeadingText } from "./HeadingText";

export const Email = () => {
  return (
    <>
      <HeadingText text="Email" icon={MdOutlineEmail} />
      <EmailInput />
      
      <Box marginBottom="60px" />
    </>
  );
};
