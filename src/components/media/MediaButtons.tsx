import { IconButton, Button, Box, Tooltip, Icon } from "@chakra-ui/react";
import { GiBullseye } from "react-icons/gi";
import { IoMdDocument } from "react-icons/io";
import cv from "../../assets/Em";

export const MediaButtons = () => {
  const downLoadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "EmilianoPerezMurillo_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        colorScheme="purple"
        variant="solid"
        fontSize="md"
        onClick={downLoadCV}
      >
        <Icon
          marginBottom="2px"
          as={IoMdDocument}
          fontSize="20px"
          marginRight="13px"
        />
        Resume
      </Button>
    </Box>
  );
};
