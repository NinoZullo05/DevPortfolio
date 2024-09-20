import React from "react";
import DevImage from "../assets/images/dev.png";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-light-bg dark:bg-dark-bg min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 md:px-12 lg:px-24 md:flex md:items-center md:ml-16 mt-8">
        <div className="md:w-1/2 text-center md:text-left md:pr-8">
          <h1 className="text-3xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-4 ">
            Front-End React Developer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Hi, I'm Nino! A passionate Front-end React Developer based in Milan,
            Italy 📍
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#test"
              className="text-3xl text-gray-600 hover:text-light-green dark:text-gray-400 dark:hover:text-dark-green"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#test"
              className="text-3xl text-gray-600 hover:text-light-green dark:text-gray-400 dark:hover:text-dark-green"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        {/* Colonna Destra con l'Immagine */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={DevImage}
            alt="Immagine Destra"
            className="w-full h-auto max-w-sm  transition-transform "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
