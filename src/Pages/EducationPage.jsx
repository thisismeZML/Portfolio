import React from "react";
import { FaGraduationCap } from "react-icons/fa6";

const educations = {
  icon: <FaGraduationCap />,
  title: "My Education",
  description:
    "I am passionate about continuous learning and constantly strive to enhance my technical skills. My educational background has equipped me with a solid foundation in Information Technology, Software Engineering, and Web Development. Each program I completed has broadened my knowledge and helped me stay updated with the latest industry practices.",
  item: [
    {
      institution: "MIBA University",
      degree: "Diploma in Information Technology",
      time: "2023-2024",
    },
    {
      institution: "Lithan University",
      degree: "Level-3 Foundation in Software Engineering",
      time: "2017-2018",
    },
    {
      institution: "MMS One Stop Solution",
      degree: "Software Web Development",
      time: "2023-2024",
    },
  ],
};

const EducationPage = () => {
  return (
    <div className="text-center lg:text-left">
      <div className="flex flex-col gap-4 mb-4">
        <h2 className="h2">{educations.title}</h2>
        <p className="mb-4">{educations.description}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
        {educations.item.map((item, index) => (
          <div className="bg-[#232229] p-8 rounded-md flex justify-center flex-col">
            <h3 className="h3">{item.institution}</h3>
            <p className="mb-2">{item.degree}</p>
            <p className="text-sm text-gray-400">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
