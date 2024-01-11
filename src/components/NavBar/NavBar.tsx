import {
  Fade,
  HStack,
  Icon,
  List,
  ListItem,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import { CiMenuFries } from "react-icons/ci";
import { ColorModeIcon } from "../ColorModeIcon";
import styles from "./NavBar.module.css";
import useColorModeStore from "../../stores/colorModeStore";

export const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const isDark = useColorModeStore((s) => s.isDark);

  return (
    <>
      <HStack
        paddingY="10px"
        position="fixed"
        width="100%"
        justifyContent={{ base: "flex-end", md: "space-between" }}
        maxWidth="735px"
        margin="0 auto"
        paddingX="15px"
        bg={isDark ? "rgba(16, 41, 60, 0.95)" : "rgba(255, 255, 255, .95)"}
      >
        <Show breakpoint="(min-width: 735px)">
          <List display={"flex"} justifyContent="flex-start">
            <ListItem className={styles.list__items} paddingRight="25px">
              <a href="#experience">Experience</a>
            </ListItem>
            <ListItem className={styles.list__items} paddingRight="25px">
              <a href="#projects">Projects</a>
            </ListItem>
            <ListItem className={styles.list__items} paddingRight="25px">
              <a href="#about">About me</a>
            </ListItem>
            <ListItem className={styles.list__items}>
              <a href="#contact">Contact</a>
            </ListItem>
          </List>
        </Show>
        <ColorModeIcon />

        <Show breakpoint="(max-width: 735px)">
          <Icon
            boxSize="25px"
            cursor="pointer"
            as={CiMenuFries}
            marginLeft="25px"
            onClick={onToggle}
          />
        </Show>
      </HStack>
      <Show breakpoint="(max-width: 735px)">
        <Fade in={isOpen}>
          <List textAlign="center" display={{ base: "", md: "flex" }}>
            <ListItem borderBottom="1px solid" marginY="10px">
              <a href="#">Experience</a>
            </ListItem>
            <ListItem borderBottom="1px solid" marginY="10px">
              <a href="#">Projects</a>
            </ListItem>
            <ListItem borderBottom="1px solid" marginY="10px">
              <a href="#">About me</a>
            </ListItem>
            <ListItem borderBottom="1px solid" marginY="10px">
              <a href="#">Contact</a>
            </ListItem>
          </List>
        </Fade>
      </Show>
    </>
  );
};
