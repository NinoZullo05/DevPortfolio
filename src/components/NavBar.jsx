import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../hooks/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

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
              Nzullo
            </a>
          </div>

          {/* Links per large screen (allineati a destra) */}
          <div className="hidden md:flex items-center space-x-4 ml-auto">
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

            {/* Pulsante di toggle dark mode per schermi grandi */}
            <button
              onClick={toggleTheme}
              className="ml-4 text-light-text dark:text-dark-text focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>

          {/* Pulsante menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green focus:outline-none"
              aria-label="toggle menu"
            >
              {!isOpen ? <FaBars size={24} /> : <FaTimes size={24} />}
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
          {/* Parte superiore menu mobile */}
          <div className="px-4 py-6">
            <div className="flex items-center justify-between mb-8">
              <a
                href="#"
                className="text-xl font-bold text-light-text dark:text-dark-text"
              >
                Nzullo
              </a>
              <button
                onClick={() => setIsOpen(false)}
                className="text-light-text dark:text-dark-text focus:outline-none"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Link del menu mobile */}
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

          {/* Toggle modalità scura (in basso nella tendina mobile) */}
          <div className="px-4 py-6 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 text-light-text dark:text-dark-text focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <>
                  <FaSun size={24} />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <FaMoon size={24} />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay per chiusura menu mobile */}
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
