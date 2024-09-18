import React from "react";
import AboutImage from "../assets/images/about.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="bg-light-bg dark:bg-dark-bg py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-light-text dark:text-dark-text mb-8">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex justify-center">
            <img
              src={AboutImage}
              alt="Workspace"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text mb-4">
              Front-end Developer based in Milan, Italy 📍
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Hey, my name is Nino, and I'm a Frontend Developer. My passion is
              to create and develop a clean UI/UX for my users.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              My main stack currently is React/Next.js with Tailwind CSS and
              TypeScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
