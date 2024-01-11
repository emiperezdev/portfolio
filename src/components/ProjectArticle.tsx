import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import gamehubLight from "../assets/game-hub-white.webp";
import cartWhite from "../assets/cart-white.webp";
import { Technologies } from "./Technologies";
import { GrMysql } from "react-icons/gr";
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

export const ProjectArticle = () => {
  return (
    <>
      <Box>
        <Link href="https://game-hub-five-rouge.vercel.app/" target="_blank">
          <Image borderRadius="10px" src={gamehubLight} />
        </Link>
        <Heading fontSize="xl" marginY="20px">
          Game-Hub
        </Heading>
        <Text marginBottom="8px">
          Is a website to search games filtering by platforms, gender and
          rating.
        </Text>
        <Technologies />
        <Box marginTop="10px">
          <Link href="https://game-hub-five-rouge.vercel.app/" target="_blank">
            <Button marginRight="10px">Live</Button>
          </Link>
          <Link href="https://github.com/emiperezdev/game-hub" target="_blank">
            <Button marginRight="10px">Code</Button>
          </Link>
        </Box>
      </Box>

      <Box marginTop="50px">
        <Link href="https://app.panelabc.com/v1/ingreso" target="_blank">
          <Image borderRadius="10px" src={cartWhite} />
        </Link>
        <Heading fontSize="xl" marginY="20px">
          Cart
        </Heading>

        <HStack>
          <Text fontWeight="bold">User: user</Text>
          <Text fontWeight="bold">Password: user</Text>
        </HStack>
        <Text marginBottom="8px">
          Inventory management and sales control system with an authentication
          of users.
        </Text>
        <HStack spacing="15px" marginBottom="8px">
          <Icon boxSize="25px" color="#00c6f7" as={GrMysql} />

          <Icon boxSize="25px" color="#2F74C0" as={FaPhp} />

          <Icon boxSize="25px" color="#7432F9" as={FaBootstrap} />
        </HStack>
        <Box marginTop="10px">
          <Link href="https://app.panelabc.com/v1/ingreso" target="_blank">
            <Button marginRight="10px">Live</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};
