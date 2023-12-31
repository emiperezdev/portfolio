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
          boxShadow="xl"
          marginBottom="5px"
          border="7px solid white"
          src={userImage}
          borderRadius="100%"
        />
      </Center>
      <Box marginLeft={{ md: "15px" }}>
        <Heading
          fontSize={{ base: "2xl", md: "4xl" }}
          marginTop={{ base: "20px", md: "25px" }}
          marginBottom="5px"
        >
          Emiliano PM
        </Heading>
        <Text
          marginX={{ base: "10px", md: '0px'}}
          marginBottom="5px"
          fontSize={{ base: "md", md: "lg" }}
        >
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
            fontSize="md"
          >
            Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
