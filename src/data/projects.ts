import { IconType } from "react-icons";
import gameHubImage from "../assets/game-hub-white.webp";
import cartImage from "../assets/cart-white.webp";
import { FaReact } from "react-icons/fa";
import { SiChakraui, SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaPhp } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";

export interface IconTech {
  icon: IconType;
  size: string;
  color: string;
}

export interface Project {
  image: string;
  title: string;
  description: string;
  icons: IconTech[];
  liveLink?: string;
  codeLink?: string;
}

const projects: Project[] = [
  {
    image: gameHubImage,
    title: "Game-Hub",
    description:
      "Is a website to search games filtering by platforms, gender and rating.",
    icons: [
      { icon: FaReact, size: "25px", color: "#00c6f7" },
      { icon: SiTypescript, size: "25px", color: "#2F74C0" },
      { icon: SiChakraui, size: "25px", color: "#25BAAC" },
    ],
    liveLink: "https://game-hub-five-rouge.vercel.app/",
    codeLink: "https://github.com/emiperezdev/game-hub",
  },
  {
    image: cartImage,
    title: "Cart",
    description:
      "Inventory management and sales control system with an authentication of users.",
    icons: [
      { icon: GrMysql, size: "25px", color: "#00c6f7" },
      { icon: FaPhp, size: "25px", color: "#2F74C0" },
      { icon: FaBootstrap, size: "25px", color: "#7432F9" },
    ],
    liveLink: "https://app.panelabc.com/v1/ingreso",
  },
];

export default projects;
