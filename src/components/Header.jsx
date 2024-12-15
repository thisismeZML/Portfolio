import React from "react";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { CiMenuFries } from "react-icons/ci";
import useNavStore from "../store/useNavStore";

const Header = () => {
  const { isOpen, setIsOpen } = useNavStore();

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-semibold">
            Zml<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Navbar />
          <NavLink to="/contact">
            <button className="bg-accent hover:bg-accent-hover text-black px-4 py-2 rounded-md">
              Hire Me
            </button>
          </NavLink>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <button onClick={setIsOpen}>
            <CiMenuFries className="text-[32px] text-accent" />
          </button>
          <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
