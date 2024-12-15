import React, { useState } from "react";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Ecommerce Website",
    desc: "An intuitive ecommerce platform where users can browse and purchase electronic products. Features include a product catalog, filtering, cart management, and responsive design.",
    image: "./electronic.png",
    stack: ["HTML 5", "CSS 3", "JavaScript", "Tailwind CSS", "React"],
    live: "https://phenomenal-tulumba-3e9440.netlify.app/",
    github: "https://github.com/thisismeZML/react-ecommerce",
  },
  {
    num: "02",
    category: "Frontend and Backend API",
    title: "Admin Dashboard",
    desc: "A comprehensive admin dashboard for managing data and analytics. Includes features like dynamic charts, user management, and backend API integration for real-time data.",
    image: "./dashboard.png",
    stack: [
      "HTML 5",
      "CSS 3",
      "JavaScript",
      "Tailwind CSS",
      "React",
      "Laravel",
    ],
    live: "https://illustrious-beijinho-fcdd34.netlify.app/",
    github: "https://github.com/thisismeZML/dashboard-project",
  },
  {
    num: "03",
    category: "Frontend And FakeStore API",
    title: "Clothing Website",
    desc: "A visually appealing clothing store built using FakeStore API. Features include product listings, detailed pages, and cart functionality, designed for a seamless shopping experience.",
    image: "./clothing.png",
    stack: ["HTML 5", "CSS 3", "JavaScript", "Tailwind CSS", "React"],
    live: "https://superlative-ganache-6980e6.netlify.app/",
    github: "https://github.com/thisismeZML/ecommerce-project",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Movie Website",
    desc: "A movie discovery platform where users can browse and search for movies. Features include responsive design, interactive UI, and dynamic data fetching for movie details.",
    image: "./movie.png",
    stack: ["HTML 5", "CSS 3", "JavaScript", "Tailwind CSS", "React"],
    live: "https://aquamarine-faloodeh-613cbf.netlify.app/",
    github: "https://github.com/thisismeZML/react-moviewebsite",
  },
];


const ProjectsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const { num, category, title, desc, image, stack, live, github } =
    projects[currentIndex];

  return (
    <div className="text-white min-h-[calc(100vh-15rem)] bg-primary flex flex-col lg:flex-row items-center justify-center container ">
      {/* Left Section - Project Details */}
      <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-none text-center lg:text-left">
        <p className="h3 font-semibold text-accent">
          {num} - {category}
        </p>
        <h2 className="h2 font-bold text-white">{title}</h2>
        <p className="text-gray-300">{desc}</p>
        <h3 className="text-lg font-semibold text-green-400 mt-4">Stack:</h3>
        <ul className="flex flex-wrap justify-center lg:justify-start gap-2">
          {stack.map((tech, index) => (
            <li
              key={index}
              className="bg-accent text-black px-3 py-1 rounded-lg text-sm font-medium"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex justify-center lg:justify-start gap-4">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase flex items-center gap-2 border border-accent py-3 px-6 rounded-full text-accent hover:bg-accent hover:text-black transition-all"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-md transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Right Section - Project Image */}
      <div className="w-full lg:w-1/2 flex flex-col items-center mt-8 lg:mt-0 relative order-1 lg:order-none">
        <img
          src={image}
          alt={title}
          className="max-w-md xl:max-w-full rounded-lg shadow-2xl"
        />

        {/* Navigation Arrows Section */}
        <div className="flex  justify-end gap-5 w-full mt-6 mb-6 px-6">
          <button
            onClick={prevProject}
            className="bg-accent hover:bg-accent-hover text-black px-4 py-2  transition duration-300"
          >
            &larr; Prev
          </button>
          <button
            onClick={nextProject}
            className="bg-accent hover:bg-accent-hover text-black px-4 py-2  transition duration-300"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
