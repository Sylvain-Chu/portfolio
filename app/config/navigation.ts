import { HiHome, HiUser, HiBeaker, HiMail } from "react-icons/hi";
import { IconType } from "react-icons";

export interface NavItem {
  title: string;
  href: string;
  icon?: IconType;
}

export const navigationItems: NavItem[] = [
  {
    title: "Accueil",
    href: "/",
    icon: HiHome,
  },
  {
    title: "À propos",
    href: "/about",
    icon: HiUser,
  },
  {
    title: "Projets",
    href: "/projects",
    icon: HiBeaker,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: HiMail,
  },
];
