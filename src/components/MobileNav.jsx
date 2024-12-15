import React from "react";
import { FaXmark } from "react-icons/fa6";
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

const MobileNav = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0" : "translate-x-full"
      } fixed top-0 right-0 w-[300px] bg-slate-950 h-full flex flex-col p-5 transition-all duration-300 z-50`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">
          Zml<span className="text-accent">.</span>
        </h1>
        <button onClick={setIsOpen}>
          <FaXmark className="text-2xl text-accent" />
        </button>
      </div>
      <nav className="flex flex-col gap-8 items-center justify-center h-full">
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
    </div>
  );
};

export default MobileNav;
