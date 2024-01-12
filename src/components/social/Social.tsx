import { MdAlternateEmail } from "react-icons/md";
import { SocialItems } from "./SocialItems";
import { HeadingText } from "../HeadingText";

export const Social = () => {
  return (
    <>
      <HeadingText id="contact" text="Social" icon={MdAlternateEmail} />
      <SocialItems />
    </>
  );
};
