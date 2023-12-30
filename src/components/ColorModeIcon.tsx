import { Icon, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export const ColorModeIcon = () => {
  const {toggleColorMode} = useColorMode();
  const [darkTheme, setDarkTheme] = useState(true);

  const handleOnClick = () => {
    setDarkTheme(!darkTheme);
    toggleColorMode();
  }

  return (
    <Icon
      marginTop="25px"
      boxSize="21px"
      as={darkTheme ? FaMoon : FaSun}
      position='absolute'
      right='22px'
      cursor='pointer'
      onClick={handleOnClick}
    />
  );
};
