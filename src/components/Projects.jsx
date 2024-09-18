import React from "react";
import ProjectCard from "./ProjectCard";

import { FaAngular, FaReact, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFlutter } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "TodoHQ",
      description: "A task management app built with Angular, Tailwind CSS, and MySQL.",
      image: "https://via.placeholder.com/300",
      technologies: [
        { name: "Angular", icon: <FaAngular className="mr-1" />, color: "red" },
        { name: "Tailwind", icon: <SiTailwindcss className="mr-1" />, color: "teal" },
        { name: "MySQL", icon: <SiMysql className="mr-1" />, color: "blue" },
      ],
    },
    {
      title: "Smartlinx Website",
      description: "A responsive website built with ReactJS and Tailwind CSS.",
      image: "https://via.placeholder.com/300",
      technologies: [
        { name: "React", icon: <FaReact className="mr-1" />, color: "blue" },
        { name: "Tailwind", icon: <SiTailwindcss className="mr-1" />, color: "teal" },
      ],
    },
    {
      title: "Smartlinx App",
      description: "A mobile app built with Flutter, Java, and MySQL.",
      image: "https://via.placeholder.com/300",
      technologies: [
        { name: "Flutter", icon: <SiFlutter className="mr-1" />, color: "blue" },
        { name: "Java", icon: <FaJava className="mr-1" />, color: "orange" },
        { name: "MySQL", icon: <SiMysql className="mr-1" />, color: "blue" },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="flex flex-wrap">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
