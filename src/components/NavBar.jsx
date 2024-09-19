import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import DarkModeToggle from "./DarkModeToggle";
import SocialMediaButtons from "./SocialMediaButtons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-light-bg dark:bg-dark-bg shadow-lg" : "bg-transparent dark:bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-between items-center h-16">
          <a href="github.com/NinoZullo05" className="text-xl font-bold text-light-text dark:text-dark-text">
            Nzullo
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300"
              >
                {link.label}
              </Link>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="md:hidden text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300 z-50"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-light-bg dark:bg-dark-bg shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col h-full pt-16 px-8">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-lg text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green cursor-pointer transition duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <SocialMediaButtons />
            <div className="mt-4 flex justify-center mb-4">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;