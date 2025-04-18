import { Box, HStack, Icon, List, ListItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu2Fill } from "react-icons/ri";
import useColorModeStore from "../../stores/colorModeStore";
import { ColorModeIcon } from "./ColorModeIcon";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const isDark = useColorModeStore((s) => s.isDark);
  const [isExpanded, setExpanded] = useState(false);

  return (
    <>
      <Show above="750px">
        <HStack
          zIndex='1'
          paddingY="10px"
          position="fixed"
          width="100%"
          justifyContent={{ base: "flex-end", md: "space-between" }}
          maxWidth="735px"
          marginTop="1rem"
          paddingX="15px"
          bg={isDark ? "rgba(16, 41, 60, 0.95)" : "rgba(255, 255, 255, .95)"}
        >
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

          <ColorModeIcon />
        </HStack>
      </Show>

      <Show below="750px">
        <Box
          className={styles.collapsible}
          bg={isDark ? "rgba(16, 41, 60, 0.95)" : "rgba(255, 255, 255, .95)"}
        >
          <header className={styles.collapsible__header}>
            <Icon
              boxSize="25px"
              as={isExpanded ? AiOutlineClose : RiMenu2Fill}
              cursor="pointer"
              marginRight="10px"
              onClick={() => setExpanded(!isExpanded)}
            />
            <ColorModeIcon />
          </header>

          {isExpanded && (
            <List
              marginRight="40px"
              alignItems="center"
              textAlign="center"
              display={{ base: "", md: "flex" }}
            >
              <ListItem marginY="10px">
                <a href="#experience">Experience</a>
              </ListItem>
              <ListItem marginY="10px">
                <a href="#projects">Projects</a>
              </ListItem>
              <ListItem marginY="10px">
                <a href="#about">About me</a>
              </ListItem>
              <ListItem marginY="10px">
                <a href="#contact">Contact</a>
              </ListItem>
            </List>
          )}
        </Box>
      </Show>
    </>
  );
};
