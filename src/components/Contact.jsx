const Contact = () => {
  return (
    <div id="contact" className="bg-light-bg dark:bg-dark-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-light-text dark:text-dark-text mb-8">
          Contact
        </h2>
        <p className="text-xl text-center text-light-text dark:text-dark-text mb-8">
          Don't be shy! Hit me up! 👇
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt text-2xl text-gray-600 dark:text-gray-400 mr-2"></i>
            <div>
              <h3 className="font-semibold text-light-text dark:text-dark-text">
                Location
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Milan, Italy</p>
            </div>
          </div>
          <div className="flex items-center">
            <i className="fas fa-envelope text-2xl text-gray-600 dark:text-gray-400 mr-2"></i>
            <div>
              <h3 className="font-semibold text-light-text dark:text-dark-text">
                Mail
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                nino.zullo05dev@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
