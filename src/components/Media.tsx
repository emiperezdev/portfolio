import {
  Box,
  Button,
  Center,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { GiBullseye } from "react-icons/gi";
import { IoMdDocument } from "react-icons/io";
import userImage from "../assets/emiliano.jpg";

export const Media = () => {
  return (
    <Box
      display={{ md: "flex" }}
      marginTop="75px"
      textAlign={{ base: "center", md: "left" }}
    >
      <Center>
        <Image
          marginBottom="5px"
          border="7px solid"
          src={userImage}
          borderRadius="100%"
        />
      </Center>
      <Box marginLeft={{ md: "15px" }}>
        <Heading
          fontSize="4xl"
          marginTop={{ base: "20px", md: "25px" }}
          marginBottom="5px"
        >
          Emiliano PM
        </Heading>
        <Text marginBottom="5px">
          I'm a passionate web development and design UI/UX.
        </Text>
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
          >
            Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
