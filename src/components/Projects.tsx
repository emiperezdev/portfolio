import { HStack, Heading, Icon } from '@chakra-ui/react'
import { FaStarHalfAlt } from "react-icons/fa"

export const Projects = () => {
  return (
    <HStack marginTop="80px">
        <Heading fontSize={{ base: "2xl", md: "3xl" }}>Projects</Heading>
        <Icon
          marginLeft="10px"
          boxSize="35px"
          as={FaStarHalfAlt}
        />
      </HStack>
  )
}
