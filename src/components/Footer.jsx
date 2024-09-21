import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-gray dark:bg-dark-bg text-light-text dark:text-dark-text py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            Copyright © {currentYear} Nino Zullo. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://github.com/your-github-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300"
              aria-label="GitHub Profile"
            >ssssssssssssss
              <i className="fab fa-github text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
