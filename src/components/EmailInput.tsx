import { HStack, IconButton, Input, Link, Tooltip } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import { FaCopy } from "react-icons/fa6";

export const EmailInput = () => {
  return (
    <HStack>
      <Input readOnly variant="filled" placeholder="emiperez.dev@gmail.com" />
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
      <Tooltip placement="top" hasArrow label="Copy email">
        <IconButton
          colorScheme="purple"
          borderRadius="11px"
          aria-label="Search database"
          icon={<FaCopy />}
          fontSize="2xl"
        />
      </Tooltip>
    </HStack>
  );
};
