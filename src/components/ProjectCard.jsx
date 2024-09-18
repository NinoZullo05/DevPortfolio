import React, { useState } from "react";
import { FaAngular, FaReact, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFlutter } from "react-icons/si";

const ProjectCard = ({ title, description, image, technologies }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div
        className={`relative w-auto max-w-xs h-80 rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-500 ${
          isFlipped ? "transform rotate-y-180" : ""
        }`}
        onMouseEnter={handleFlip}
        onMouseLeave={handleFlip}
        role="button"
        aria-label="Project Card"
        tabIndex="0"
      >
        {/* Front Side */}
        <div
          className={`absolute w-full h-full backface-hidden transition-opacity duration-500 ${
            isFlipped ? "opacity-0" : "opacity-100"
          }`}
        >
          <img
            src={image}
            alt={`${title} Thumbnail`}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
        </div>

        {/* Back Side */}
        <div
          className={`absolute w-full h-full backface-hidden bg-white p-6 transform rotate-y-180 transition-opacity duration-500 ${
            isFlipped ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600 mb-4">Detailed information about the project.</p>
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
