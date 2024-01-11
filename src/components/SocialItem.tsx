import { Card, CardBody, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  sizeIcon: string;
  color: string;
  title: string;
  link: string;
}

export const SocialItem = ({ icon, sizeIcon, color, title, link }: Props) => {
  return (
    <>
      <Link
        href={link}
        _hover={{
          textDecoration: "none",
        }}
        target="_blank"
      >
        <Card
          _hover={{
            transform: "scale(1.07)",
            transition: "transform .15s ease-in",
          }}
          cursor="pointer"
          borderRadius="10px"
        >
          <CardBody>
            <HStack>
              <Icon color={color} as={icon} boxSize={sizeIcon} />
              <Text color={color}>{title}</Text>
            </HStack>
          </CardBody>
        </Card>
      </Link>
    </>
  );
};
