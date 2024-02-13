/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  HomeIcon,
  UserCircleIcon,
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import ContactIcon from "../../assets/icons/ContactIcon";
import InformationIcon from "../../assets/icons/InformationIcon";

import CV from "../../assets/Resume.pdf";
import NavItem from "./NavItem";

const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
    href: "home",
  },
  {
    name: "Skills",
    icon: UserCircleIcon,
    href: "skills",
  },
  {
    name: "Projects",
    icon: CommandLineIcon,
    href: "projects",
  },
  {
    name: "About",
    icon: ContactIcon,
    href: "about",
  },
  {
    name: "Contact",
    icon: InformationIcon,
    href: "contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center gap-10 justify-around py-4 px-6">
        <h1 className="text-lg hidden md:inline-block text-black font-bold">
          Emil Stanchev
        </h1>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem
              key={name}
              path={href}
              className="flex items-center gap-2 font-medium text-gray-900 hover:cursor-pointer"
              icon={<Icon className="h-5 w-5" />}
            >
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        <a
          href={CV}
          download="EmilStanchevCV"
          target="_blank"
          className="text-lg border-2 p-2 rounded-lg border-black"
        >
          Download CV
        </a>
        <button onClick={handleOpen} className="ml-auto inline-block lg:hidden">
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {open && (
        <div className="container mx-auto border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem path={href} onClick={() => handleOpen()} key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
