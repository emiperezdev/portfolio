import {
  Text,
  Box,
  Heading,
  Icon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import { Work } from "../data/works";

interface Props {
  work: Work;
}

export const ExperienceStructure = ({ work }: Props) => {
  return (
    <Box>
      <Heading fontSize="xl" alignItems="center">
        {work.position}
        <Icon paddingTop="10px" as={GoDotFill} />
        {work.company}
      </Heading>

      <Text marginTop="5px" marginBottom="20px">
        {work.date}
      </Text>

      <UnorderedList width="70%">
        <ListItem marginBottom="10px">
          {work.what}
        </ListItem>
        <ListItem marginBottom="10px">
          {work.whatFor}
        </ListItem>
        <ListItem marginBottom="10px">
          {work.result}
        </ListItem>
      </UnorderedList>
    </Box>
  );
};
