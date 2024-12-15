import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa6";
import { SiGit, SiGithub, SiTailwindcss } from "react-icons/si";

const skills = {
  title: "My Skills",
  description:
    "I have a strong foundation in frontend development with expertise in creating responsive, user-friendly websites. I specialize in modern web technologies such as React, JavaScript, and Tailwind CSS, ensuring fast, scalable, and maintainable code. With experience in version control using Git and GitHub, I focus on delivering high-quality, efficient web solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiGit />,
      name: "Git",
    },
    {
      icon: <SiGithub />,
      name: "GitHub",
    },
  ],
};
const SkillPage = () => {
  return (
    <div className="text-center lg:text-left mb-8">
      <div className="flex flex-col gap-4 mb-4">
        <h2 className="h2">{skills.title}</h2>
        <p className="mb-4">{skills.description}</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]">
        {skills.skillList.map((skill, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-2 bg-[#232329] p-5 h-[140px] group"
          >
            <div className="text-6xl group-hover:text-accent duration-300 transition-all">
              {skill.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPage;
