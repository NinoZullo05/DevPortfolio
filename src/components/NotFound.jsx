const NotFound = () => {
  return (
    <div className="bg-light-bg dark:bg-dark-bg flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-light-purple dark:text-dark-purple">404</h1>
        <h2 className="text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-light-purple dark:bg-dark-purple text-white rounded-lg shadow hover:bg-purple-700 dark:hover:bg-purple-600 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
