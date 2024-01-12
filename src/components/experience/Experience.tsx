import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { TimeLine } from "./TimeLine";
import { HeadingText } from "../HeadingText";

export const Experience = () => {
  return (
    <>
      <HeadingText
        id="experience"
        text="Experience"
        icon={PiSuitcaseSimpleFill}
      />
      <TimeLine />
    </>
  );
};
