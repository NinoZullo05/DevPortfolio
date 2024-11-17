import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaJava,
  FaPython,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiMysql,
  SiFlask,
  SiPhp,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

const SkillCard = ({ icon, name, level }) => {
  const getProgressBarColor = (level) => {
    if (level >= 75) return "bg-green-500";
    if (level >= 50) return "bg-yellow-500"; 
    return "bg-red-500"; 
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center transition-all duration-300 hover:shadow-lg">
      {icon}
      <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-white">
        {name}
      </h3>
      <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${getProgressBarColor(level)}`}
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">
        {level}%
      </span>
    </div>
  );
};

export default function DevSkills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-5xl text-orange-500" />,
      level: 95,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-5xl text-blue-500" />,
      level: 70,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-5xl text-yellow-500" />,
      level: 70,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-5xl text-blue-600" />,
      level: 50,
    },
    {
      name: "React",
      icon: <FaReact className="text-5xl text-blue-400" />,
      level: 70,
    },
    {
      name: "Angular",
      icon: <FaAngular className="text-5xl text-red-600" />,
      level: 50,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-5xl text-teal-500" />,
      level: 70,
    },
    {
      name: "Flutter",
      icon: <SiFlutter className="text-5xl text-blue-500" />,
      level: 75,
    },
    {
      name: "Java",
      icon: <FaJava className="text-5xl text-red-500" />,
      level: 90,
    },
    {
      name: "Python",
      icon: <FaPython className="text-5xl text-blue-500" />,
      level: 75,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-5xl text-blue-800" />,
      level: 90,
    },
    {
      name: "PHP",
      icon: <SiPhp className="text-5xl text-purple-600" />,
      level: 80,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-5xl text-yellow-500" />,
      level: 60,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-5xl text-green-500" />,
      level: 30,
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-5xl text-black" />,
      level: 80,
    },
    {
      name: "Docker",
      icon: <FaDocker className="text-5xl text-blue-600" />,
      level: 70,
    },
  ];

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Programming Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
