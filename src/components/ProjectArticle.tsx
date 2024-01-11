import { Box, Button, Heading, Image, Link, Text } from "@chakra-ui/react";
import gamehubLight from "../assets/game-hub-white.webp";
import { Technologies } from "./Technologies";

export const ProjectArticle = () => {

  return (
    <Box>
      <Link href="https://game-hub-five-rouge.vercel.app/" target="_blank">
        <Image
          borderRadius="10px"
          src={gamehubLight}
        />
      </Link>
      <Heading fontSize="xl" marginY="20px">
        Game-Hub
      </Heading>
      <Text marginBottom="8px">
        Is a website to search games filtering by platforms, gender and rating.
      </Text>
      <Technologies />
      <Box marginTop='10px'>
        <Button marginRight="10px">Code</Button>
        <Button>Live</Button>
      </Box>
    </Box>
  );
};
