import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import userImage from "../assets/emiliano.jpg";
import { MediaButtons } from "./MediaButtons";

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
          marginX={{ base: "20px", md: "0px" }}
          marginBottom="5px"
          fontSize={{ base: "md", md: "lg" }}
        >
          I'm a passionate web development and design UI/UX.
        </Text>
        <MediaButtons />
      </Box>
    </Box>
  );
};
