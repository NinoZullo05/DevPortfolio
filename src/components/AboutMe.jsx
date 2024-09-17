const AboutMe = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-light-text dark:text-dark-text mb-8">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/path-to-your-image.jpg"
              alt="Workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text mb-4">
              Front-end Developer based in Milan, Italy 📍
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Hey, my name is Nino, and I'm a Frontend Developer. My passion is
              to create and develop a clean UI/UX for my users.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              My main stack currently is React/Next.js with Tailwind CSS and
              TypeScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
