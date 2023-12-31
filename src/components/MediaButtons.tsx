import { IconButton, Button, Box } from "@chakra-ui/react";
import { GiBullseye } from "react-icons/gi";
import { IoMdDocument } from "react-icons/io";

export const MediaButtons = () => {
  return (
    <Box marginTop="10px">
      <IconButton
        colorScheme="green"
        aria-label="Search database"
        icon={<GiBullseye />}
        fontSize="3xl"
      />
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
