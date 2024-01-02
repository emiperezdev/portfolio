import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import userImage from "../assets/emiliano.jpg";
import { MediaButtons } from "./MediaButtons";

export const Media = () => {
  return (
    <Box
      display={{ md: "flex" }}
      marginTop="220px"
      textAlign={{ base: "center", md: "left" }}
    >
      <Center>
        <Image
          boxShadow="xl"
          marginBottom="5px"
          border="4px solid white"
          src={userImage}
          borderRadius="100%"
        />
      </Center>
      <Box marginLeft={{ md: "15px" }}>
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          marginTop={{ base: "20px", md: "11px" }}
          marginBottom="5px"
        >
          Emiliano PM
        </Heading>
        <Text
          marginBottom="5px"
          fontSize={{ base: "lg", md: "xl" }}
          marginLeft="2px"
        >
          I'm a passionate web development and design UI/UX.
        </Text>
        <MediaButtons />
      </Box>
    </Box>
  );
};
