'use client'

import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { FaAngular, FaReact, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFlutter } from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiFlask } from "react-icons/si";

import ToDOHQImage from "../assets/images/ToDoHQ.png";
import SmartlinxWebsiteImage from "../assets/images/Smartlinx_Website 2.png";
import SmartlinxAppImage from "../assets/images/SmartLinx.png";

export default function Projects() {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const projects = [
    {
      title: "TodoHQ",
      description:
        "A task management app built with Angular, Tailwind CSS, and MySQL.",
      image: ToDOHQImage,
      technologies: [
        {
          name: "Angular",
          icon: <FaAngular className="w-4 h-4" />,
          bgColor: "bg-red-100",
          textColor: "text-red-800",
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="w-4 h-4" />,
          bgColor: "bg-teal-100",
          textColor: "text-teal-800",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4" />,
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
        },
        {
          name: "Flask",
          icon: <SiFlask className="w-4 h-4" />,
          bgColor: "bg-yellow-100",
          textColor: "text-blue-800",
        },
      ],
      repositoryLink: "https://github.com/NinoZullo05/ToDoHQ",
    },
    {
      title: "Smartlinx Website",
      description: "A responsive website built with ReactJS and Tailwind CSS.",
      image: SmartlinxWebsiteImage,
      technologies: [
        {
          name: "React",
          icon: <FaReact className="w-4 h-4" />,
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
        },
        {
          name: "Tailwind",
          icon: <SiTailwindcss className="w-4 h-4" />,
          bgColor: "bg-teal-100",
          textColor: "text-teal-800",
        },
      ],
      repositoryLink: "https://github.com/NinoZullo05/Smartlinx-Website",
    },
    {
      title: "Smartlinx App",
      description: "A mobile app built with Flutter, Java, and MySQL.",
      image: SmartlinxAppImage,
      technologies: [
        {
          name: "Flutter",
          icon: <SiFlutter className="w-4 h-4" />,
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
        },
        {
          name: "Java",
          icon: <FaJava className="w-4 h-4" />,
          bgColor: "bg-orange-100",
          textColor: "text-orange-800",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4" />,
          bgColor: "bg-blue-100",
          textColor: "text-blue-800",
        },
      ],
      repositoryLink: "https://github.com/Smartlinx-Project/Mobile-app",
    },
  ];

  useEffect(() => {
    if (scrollRef.current) {
      setMaxScroll(
        scrollRef.current.scrollWidth - scrollRef.current.clientWidth
      );
    }
  }, [projects]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth;
      let newScrollPosition =
        scrollPosition + (direction === "left" ? -scrollAmount : scrollAmount);
      newScrollPosition = Math.max(0, Math.min(newScrollPosition, maxScroll));
      container.scrollTo({ left: newScrollPosition, behavior: "smooth" });
      setScrollPosition(newScrollPosition);
    }
  };

  const showLeftButton = scrollPosition > 0;
  const showRightButton = scrollPosition < maxScroll;

  return (
    <div
      id="projects"
      className="py-12 dark:bg-gray-900 bg-gray-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Projects
        </h2>

        <div className="relative">
          {showLeftButton && (
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 z-10"
              onClick={() => scroll("left")}
              aria-label="Scroll Left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4 snap-center"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  repositoryLink={project.repositoryLink}
                />
              </div>
            ))}
          </div>
          {showRightButton && (
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 z-10"
              onClick={() => scroll("right")}
              aria-label="Scroll Right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
