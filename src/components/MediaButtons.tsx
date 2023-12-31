import { IconButton, Button, Box, Tooltip } from "@chakra-ui/react";
import { GiBullseye } from "react-icons/gi";
import { IoMdDocument } from "react-icons/io";

export const MediaButtons = () => {
  return (
    <Box marginTop="10px">
      <Tooltip hasArrow label="Looking for work">
        <IconButton
          colorScheme="green"
          aria-label="Search database"
          icon={<GiBullseye />}
          fontSize="3xl"
        />
      </Tooltip>

      <Button
        marginLeft="20px"
        leftIcon={<IoMdDocument />}
        colorScheme="purple"
        variant="solid"
        fontSize="md"
      >
        Resume
      </Button>
    </Box>
  );
};
