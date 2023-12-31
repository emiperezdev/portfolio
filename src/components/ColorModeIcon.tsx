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
      marginTop="25px"
      boxSize={darkTheme ? '25px' : '22px'}
      as={darkTheme ? IoMdSunny : FaMoon}
      position="absolute"
      right="22px"
      cursor="pointer"
      onClick={handleOnClick}
    />
  );
};
