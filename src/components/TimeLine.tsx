import {
  Box,
  Heading,
  Icon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";

export const TimeLine = () => {
  return (
    <Box marginTop="40px">
      <Heading fontSize="xl" alignItems="center">
        Full-Stack Developer
        <Icon paddingTop="10px" as={GoDotFill} />
        Imprenta ABC
      </Heading>

      <Text marginTop="5px" marginBottom='20px'>January 2023 - March 2023</Text>

      <UnorderedList width='70%'>
        <ListItem marginBottom='10px'>Inventory management and sales control system.</ListItem>
        <ListItem marginBottom='10px'>
          It optimized internal processes, impacting the reduction of losses and
          employee material theft within the company.{" "}
        </ListItem>
        <ListItem marginBottom='10px'>Providing a transparent and detailed insight into resource utilization.</ListItem>
      </UnorderedList>
    </Box>
  );
};
