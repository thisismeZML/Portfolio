import React from "react";
import { NavLink } from "react-router-dom";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Me",
    path: "/about",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="flex gap-8">
      {Links.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          className={({ isActive }) =>
            isActive
              ? "text-accent font-semibold border-b-2 border-accent transition-all"
              : "text-white hover:text-accent"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
