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
import CV from "../../assets/Resume.pdf";

const NAV_MENU = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Skills",
    icon: UserCircleIcon,
    href: "#skills",
  },
  {
    name: "Projects",
    icon: CommandLineIcon,
    href: "#projects",
  },
  {
    name: "Contact",
    icon: ContactIcon,
    href: "#contact",
  },
];

function NavItem({ children, href, onClick }) {
  return (
    <li onClick={() => onClick()}>
      <a
        href={href || "#"}
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </a>
    </li>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-lg text-black font-bold">Emil Stanchev</h1>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
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
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem onClick={() => handleOpen()} key={name}>
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
