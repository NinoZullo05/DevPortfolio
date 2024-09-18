import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { FaAngular, FaReact, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFlutter } from "react-icons/si";
import { useTheme } from "../hooks/ThemeContext";

import ToDOHQImage from "../assets/images/ToDoHQ.png";
import SmartlinxWebsiteImage from "../assets/images/SmartLinx_Website.pn.png";
import SmartlinxAppImage from "../assets/images/SmartLinx.png";

const Projects = () => {
  const { isDarkMode } = useTheme();
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "TodoHQ",
      description: "A task management app built with Angular, Tailwind CSS, and MySQL.",
      image: ToDOHQImage,
      technologies: [
        { name: "Angular", icon: <FaAngular className="mr-1" />, color: "red" },
        { name: "Tailwind", icon: <SiTailwindcss className="mr-1" />, color: "teal" },
        { name: "MySQL", icon: <SiMysql className="mr-1" />, color: "blue" },
      ],
    },
    {
      title: "Smartlinx Website",
      description: "A responsive website built with ReactJS and Tailwind CSS.",
      image: SmartlinxWebsiteImage,
      technologies: [
        { name: "React", icon: <FaReact className="mr-1" />, color: "blue" },
        { name: "Tailwind", icon: <SiTailwindcss className="mr-1" />, color: "teal" },
      ],
    },
    {
      title: "Smartlinx App",
      description: "A mobile app built with Flutter, Java, and MySQL.",
      image: SmartlinxAppImage,
      technologies: [
        { name: "Flutter", icon: <SiFlutter className="mr-1" />, color: "blue" },
        { name: "Java", icon: <FaJava className="mr-1" />, color: "orange" },
        { name: "MySQL", icon: <SiMysql className="mr-1" />, color: "blue" },
      ],
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div id="projects" className={`py-24 ${isDarkMode ? "bg-dark-bg" : "bg-light-bg"}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-12 ${isDarkMode ? "text-dark-text" : "text-light-text"}`}>
          Projects
        </h2>
        <div className="relative">
          {/* Pulsanti di navigazione per mobile */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-light-bg dark:bg-dark-bg p-2 rounded-full shadow-lg hover:bg-light-green dark:hover:bg-dark-green transition duration-300 z-10 md:hidden"
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
          >
            &lt;
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"
            style={{ scrollBehavior: "smooth" }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-full lg:w-full xl:w-full p-4 snap-center"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  isDarkMode={isDarkMode}
                />
              </div>
            ))}
          </div>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-light-bg dark:bg-dark-bg p-2 rounded-full shadow-lg hover:bg-light-green dark:hover:bg-dark-green transition duration-300 z-10 md:hidden"
            onClick={() => scroll("right")}
            aria-label="Scroll Right"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
