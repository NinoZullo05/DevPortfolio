const Footer = () => {
  return (
    <footer className="bg-dark-gray dark:bg-dark-bg text-light-text dark:text-dark-text py-8">
      <div className="container mx-auto px-4">
        <div className=" dark:text-dark-text text-light-text flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © 2024. All rights are reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="#"
              className="text-light-text dark:text-dark-text hover:text-light-green dark:hover:text-dark-green transition duration-300"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
