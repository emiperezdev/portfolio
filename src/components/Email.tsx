import { Box, HStack, Heading, Icon } from "@chakra-ui/react"
import { MdOutlineEmail } from "react-icons/md";
import { EmailInput } from "./EmailInput";

export const Email = () => {
  return (
    <>
      <HStack marginTop="80px" marginBottom="40px">
        <Heading fontSize={{ base: "2xl", md: "3xl" }}>Email</Heading>
        <Icon marginLeft="10px" boxSize="36px" as={MdOutlineEmail} />
      </HStack>

      <EmailInput />

      <Box marginBottom='60px' />
    </>
  )
}
