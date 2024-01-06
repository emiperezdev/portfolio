import { Icon, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

export const ColorModeIcon = () => {
  const { toggleColorMode } = useColorMode();
  const [darkTheme, setDarkTheme] = useState(true);

  const handleOnClick = () => {
    setDarkTheme(!darkTheme);
    toggleColorMode();
  };

  return (
    <Icon
      marginTop={darkTheme ? '' : '2px'}
      boxSize={darkTheme ? '27px' : '23px'}
      as={darkTheme ? IoMdSunny : FaMoon}
      cursor="pointer"
      onClick={handleOnClick}
    />
  );
};
