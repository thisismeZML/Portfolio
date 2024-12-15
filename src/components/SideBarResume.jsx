import React from "react";
import { NavLink } from "react-router-dom";

const SideBarResume = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 mb-4">
        <h1 className="text-3xl">Why Hire Me?</h1>
        <p className="text-lg text-gray-400">Passionate frontend developer</p>
      </div>
      <div className="flex lg:flex-col gap-4">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive
              ? "bg-accent w-full text-black hover:bg-accent-hover px-4 py-2 rounded-md duration-200 flex items-center justify-center"
              : "bg-[#28272c] w-full text-white hover:bg-accent-hover hover:text-black px-4 py-2 rounded-md duration-200 flex items-center justify-center"
          }
        >
          <span>Education</span>
        </NavLink>
        <NavLink
          to="skills"
          className={({ isActive }) =>
            isActive
              ? "bg-accent w-full text-black hover:bg-accent-hover px-4 py-2 rounded-md duration-200 flex items-center justify-center"
              : "bg-[#28272c] w-full text-white hover:bg-accent-hover hover:text-black px-4 py-2 rounded-md duration-200 flex items-center justify-center"
          }
        >
          <span>Skills</span>
        </NavLink>
      </div>
    </div>
  );
};

export default SideBarResume;
