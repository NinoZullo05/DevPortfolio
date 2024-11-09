import React from "react";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  isDarkMode,
  repositoryLink,
}) {
  return (
    <div
      className={`w-full h-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-all duration-300 flex flex-col ${
        isDarkMode ? "border-2 border-gray-700" : "border-2 border-gray-200"
      }`}
    >
      {/* Image container */}
      <div className="w-full pt-[50%] relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-contain bg-gray-100 dark:bg-gray-700"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1 mb-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs font-semibold rounded-full flex items-center ${tech.bgColor} ${tech.textColor}`}
              >
                {tech.icon}
                <span className="ml-1 truncate max-w-[4rem]">{tech.name}</span>
              </span>
            ))}
          </div>

          {/* Repository link */}
          <a
            href={repositoryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full px-3 py-1.5 bg-blue-500 text-white text-center text-sm rounded-lg hover:bg-blue-600 transition-colors"
          >
            View Repository
          </a>
        </div>
      </div>
    </div>
  );
}