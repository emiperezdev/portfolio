import { Icon, useColorMode } from "@chakra-ui/react";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import useColorModeStore from "../../stores/colorModeStore";

export const ColorModeIcon = () => {
  const { toggleColorMode } = useColorMode();
  const { isDark, colorChange } = useColorModeStore();
  const handleOnClick = () => {
    colorChange();
    toggleColorMode();
  };

  return (
    <Icon
      marginTop={isDark ? "" : "2px"}
      boxSize={isDark ? "27px" : "23px"}
      as={isDark ? IoMdSunny : FaMoon}
      cursor="pointer"
      onClick={handleOnClick}
    />
  );
};
