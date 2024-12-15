import { div } from "motion/react-client";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBarResume from "./SideBarResume";

const ResumeLayout = () => {
  return (
    <div>
      <div className="container grid grid-cols-1 lg:grid-cols-6 gap-12 mb-6 xl:mb-0">
        {/* Sidebar - takes full width on smaller screens */}
        <div className="col-span-1 lg:col-span-2">
          <SideBarResume />
        </div>

        {/* Main content - takes full width on smaller screens */}
        <div className="col-span-1 lg:col-span-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ResumeLayout;
