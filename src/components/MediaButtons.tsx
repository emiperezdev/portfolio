import { IconButton, Button, Box, Tooltip, Icon } from "@chakra-ui/react";
import { GiBullseye } from "react-icons/gi";
import { IoMdDocument } from "react-icons/io";

export const MediaButtons = () => {
  return (
    <Box marginTop="10px">
      <Tooltip hasArrow label="Looking for work">
        <IconButton
          borderRadius="11px"
          colorScheme="green"
          aria-label="Search database"
          icon={<GiBullseye />}
          fontSize="2xl"
        />
      </Tooltip>

      <Button
        borderRadius="11px"
        marginLeft="15px"
        // leftIcon={<IoMdDocument />}
        colorScheme="purple"
        variant="solid"
        fontSize="md"
      >
        <Icon marginBottom='2px' as={IoMdDocument} fontSize='20px' marginRight='13px'/>
        Resume
      </Button>
    </Box>
  );
};