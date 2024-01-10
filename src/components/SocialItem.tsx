import { Card, CardBody, HStack, Icon, Link, Text, border } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  icon: IconType;
  sizeIcon: string;
  color: string;
  title: string;
}

export const SocialItem = ({ icon, sizeIcon, color, title }: Props) => {
  return (
    <Card cursor="pointer" borderRadius='10px'>
      <CardBody>
        <HStack>
          <Icon color={color} as={icon} boxSize={sizeIcon} />
          <Link>
            <Text color={color}>{title}</Text>
          </Link>
        </HStack>
      </CardBody>
    </Card>
  );
};
