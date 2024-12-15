import React from "react";
import { FiDownload } from "react-icons/fi";
import Socials from "../components/Socials";
import Photo from "../components/Photo";

const HomePage = () => {
  return (
    <section className="h-full mb-8">
      <div className="container h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-16 xl:pb-24 gap-12">
          {/* Text Section */}
          <div className="text-center xl:text-left w-full xl:w-1/2 space-y-6 order-2 xl:order-none">
            <span className="text-lg font-semibold">Frontend Developer</span>
            <h1 className="h1 font-bold">
              Hello, I'm <span className="text-accent">Zin Min Latt</span>
            </h1>
            <p className="leading-relaxed">
              I'm a passionate Frontend Developer specializing in creating
              clean, responsive, and visually appealing websites. I craft
              seamless user experiences with modern technologies. Let’s turn
              your ideas into reality!
            </p>
            {/* Buttons and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              {/* Updated Download CV Button */}
              <a
                href="./ZInMinLatt_Resume.pdf" // File location in public folder
                download="ZinMinLatt_Resume.pdf" // Optional: Rename on download
                className="uppercase flex items-center gap-2 border border-accent py-3 px-6 rounded-full text-accent hover:bg-accent hover:text-white transition-all"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>
              <div>
                <Socials />
              </div>
            </div>
          </div>

          {/* Photo Section */}
          <div className="w-full xl:w-1/2 flex items-center justify-center order-1 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
