import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress, SiTypescript } from "react-icons/si";

export const SmallProject = () => {
  return (
    <Box
      marginTop="50px"
      border="1px solid"
      borderRadius="10px"
      padding={"15px"}
      _hover={{
        boxShadow: '0px 1px 3px '
      }}
    >
      <Heading fontSize="xl">Vidly API</Heading>
      <Text marginTop="5px">
        This project is the backend of Vidly, an imaginary video rental app.{" "}
      </Text>
      <Text marginTop="5px">
        It saves de data in MongoDB, uses authentication and authorization.
      </Text>
      <HStack marginY={"5px"} spacing="15px" marginBottom="8px">
        <Icon boxSize="25px" color="#026E00" as={FaNodeJs} />

        <Icon boxSize="25px" color="gray" as={SiExpress} />

        <Icon boxSize="25px" color="green" as={SiMongodb} />
        <Icon boxSize="25px" color="#2F74C0" as={SiTypescript} />
      </HStack>
      <Link href="https://github.com/emiperezdev/vidly" target="_blank">
        <Button marginRight="10px">Code</Button>
      </Link>
    </Box>
  );
};
