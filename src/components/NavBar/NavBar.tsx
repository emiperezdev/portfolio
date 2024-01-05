import { HStack } from "@chakra-ui/react";
import { ColorModeIcon } from "../ColorModeIcon";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <HStack
      display={{ base: "none", md: "flex" }}
      marginTop="26px"
      justifyContent={"space-between"}
    >
      <nav className={styles.nav}>
        <ul>
          <li>
            <button>Experience</button>
          </li>
          <li>
            <button>Projects</button>
          </li>
          <li>
            <button>About me</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </nav>
      <ColorModeIcon />
    </HStack>
  );
};
