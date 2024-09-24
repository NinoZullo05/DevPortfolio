import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="bg-light-bg dark:bg-dark-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-light-text dark:text-dark-text mb-12">
          Get in Touch
        </h2>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12">
          I’d love to hear from you! Whether you have a question or just want to
          say hi, feel free to drop a message.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <a
            href="https://www.google.com/maps/place/Cremona,+Italy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center justify-center rounded-full bg-light-purple dark:bg-dark-purple p-4 mr-4">
              <FaMapMarkerAlt className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                Location
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Cremona, Italy</p>
            </div>
          </a>
          <a
            href="mailto:nino.zullo05dev@gmail.com"
            className="flex items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl"
          >
            <div className="flex items-center justify-center rounded-full bg-light-purple dark:bg-dark-purple p-4 mr-4">
              <FaEnvelope className="text-3xl text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                Mail
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                nino.zullo05dev@gmail.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
