/* eslint-disable react/prop-types */

import { Link } from "react-scroll";

const NavItem = ({ children, path, onClick, className }) => {
  console.log(path);
  return (
    <li>
      <Link
        to={path}
        smooth={true}
        duration={500}
        className={className}
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
