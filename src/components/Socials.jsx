import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, link: "https://github.com/thisismeZML" },
  { icon: <FaLinkedinIn />, link: "https://github.com/thisismeZML" },
  { icon: <FaFacebook />, link: "https://github.com/thisismeZML" },
  { icon: <FaTwitter />, link: "https://github.com/thisismeZML" },
];
const Socials = () => {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <a
          key={social.link}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex justify-center items-center border border-accent rounded-full text-accent hover:bg-accent hover:text-black transition-all duration-500"    
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
