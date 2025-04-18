import {
  Text,
  Box,
  Heading,
  Icon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { GoDotFill } from "react-icons/go";
import { Work } from "../../data/works";

interface Props {
  work: Work;
}

export const ExperienceStructure = ({ work }: Props) => {
  return (
    <Box marginBottom={'50px'}>
      <Heading fontSize="xl" alignItems="center">
        {work.position}
        <Icon paddingTop="10px" as={GoDotFill} />
        {work.company}
      </Heading>

      <Text marginTop="5px" marginBottom="20px">
        {work.date}
      </Text>

      <UnorderedList width="70%">
        {work.what && <ListItem fontSize={'1.1rem'} marginBottom="10px">{work.what}</ListItem>}
        {work.whatFor && (
          <ListItem fontSize={'1.1rem'} marginBottom="10px">{work.whatFor}</ListItem>
        )}
        {work.result && <ListItem fontSize={'1.1rem'} marginBottom="10px">{work.result}</ListItem>}
      </UnorderedList>
      
    </Box>
  );
};
