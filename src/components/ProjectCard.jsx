import React, { useState } from "react";
import { FaAngular, FaReact, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFlutter } from "react-icons/si";

const ProjectCard = ({ title, description, image, technologies, isDarkMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-full h-full max-w-xs md:max-w-sm lg:max-w-md p-4">
      <div
        className="relative w-full h-96 max-w-md rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-500"
        onMouseEnter={handleFlip}
        onMouseLeave={handleFlip}
        role="button"
        aria-label="Project Card"
        tabIndex="0"
      >
        {/* Front Side */}
        <div
          className={`w-full h-full transition-opacity duration-500 ${isFlipped ? "opacity-0" : "opacity-100"}`}
        >
          <img
            src={image}
            alt={`${title} Thumbnail`}
            className="w-full h-3/5 object-cover"
          />
          <div className={`p-4 h-2/5 ${isDarkMode ? "bg-dark-gray" : "bg-light-gray"}`}>
            <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
              {title}
            </h3>
            <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full top-0 transition-opacity duration-500 ${isFlipped ? "opacity-100" : "opacity-0"} ${isDarkMode ? "bg-dark-gray text-dark-text" : "bg-light-gray text-light-text"} p-6`}
        >
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="mb-4">Detailed information about the project.</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 bg-${tech.color}-100 text-${tech.color}-800 rounded-full text-sm font-semibold flex items-center`}
              >
                {tech.icon} {tech.name}
              </span>
            ))}
          </div>
          <div className="mt-auto">
            <a
              href="#"
              className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
              aria-label="View Project"
            >
              View Project
            </a>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default ProjectCard;
