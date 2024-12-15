import React from "react";

const AboutPage = () => {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-15rem)] bg-primary text-gray-300 px-4">
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-6 text-accent">About Me</h2>
        <p className="text-lg leading-relaxed mb-4">
          Hi, I'm <span className="text-accent font-semibold">Zin Min Latt</span>, a passionate frontend developer with experience in building clean, responsive websites. I specialize in using React for dynamic user interfaces and Tailwind CSS for fast, scalable styling.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I focus on creating intuitive, user-friendly web experiences. Whether it's building a web application or ensuring a website is responsive across all devices, I prioritize performance, accessibility, and ease of use.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          My core technologies include HTML, CSS, JavaScript, React, and Tailwind CSS. I use Git for version control and am always exploring new tools and best practices to improve my development process.
        </p>
        <p className="text-lg leading-relaxed">
          Let's work together to bring your ideas to life with clean, responsive, and modern web development.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
