import React from "react";
import { motion } from "framer-motion";
import image from "../assets/profile.png";

const Photo = () => {
  return (
    <motion.div
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.8, // Adjust duration for smoothness
        ease: "easeInOut",
      }}
      className="overflow-hidden rounded-full shadow-lg border-4 border-accent border-d"
    >
      <div className="w-[298px] h-[298px] xl:w-[550px] xl:h-[550px] scale-150 overflow-hidden">
        {/* Zoom-In Effect on Hover */}
        <motion.img
          src={image}
          alt="Profile"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }} // Zooms in on hover
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default Photo;
