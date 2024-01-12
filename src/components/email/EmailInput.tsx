import { HStack, IconButton, Input, Link, Tooltip } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";

export const EmailInput = () => {
  return (
    <HStack>
      <Input fontSize='md' fontWeight='bold' readOnly variant="filled" placeholder="emiperez.dev@gmail.com" />
      <Tooltip placement="top" hasArrow label="Send email">
        <Link href="mailto:emiperez.dev@gmail.com">
          <IconButton
            colorScheme="purple"
            borderRadius="11px"
            aria-label="Search database"
            icon={<IoSend />}
            fontSize="2xl"
          />
        </Link>
      </Tooltip>
    </HStack>
  );
};
