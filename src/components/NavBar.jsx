import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-light-bg dark:bg-dark-bg shadow-lg"
          : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a
              href="#"
              className="text-xl font-bold text-light-text dark:text-dark-text"
            >
              Nzullo.dev
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green focus:outline-none focus:text-light-green dark:focus:text-dark-green"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                  ></path>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-64 bg-light-bg dark:bg-dark-bg z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="px-4 py-6">
            <div className="flex items-center justify-between mb-8">
              <a
                href="#"
                className="text-xl font-bold text-light-text dark:text-dark-text"
              >
                Nzullo.dev
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="text-light-text dark:text-dark-text focus:outline-none"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  ></path>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="px-4 py-6">
            <div className="flex justify-start space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-light-green dark:hover:text-dark-green"
              >
                <span className="sr-only">LinkedIn</span>
                {/* Icona LinkedIn */}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-light-green dark:hover:text-dark-green"
              >
                <span className="sr-only">GitHub</span>
                {/* Icona GitHub */}
              </a>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
