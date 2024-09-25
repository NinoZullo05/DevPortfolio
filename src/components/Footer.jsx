import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" dark:bg-gray-600 text-light-text bg-gray-200 dark:text-dark-text py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} Nino Zullo. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/ninozullo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text dark:text-dark-text hover:text-purple-600 dark:hover:text-purple-900 transition duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/NinoZullo05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text dark:text-dark-text hover:text-purple-600 dark:hover:text-purple-900 transition duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;