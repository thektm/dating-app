import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Welcome Home</h1>
        <p className="text-gray-600 dark:text-gray-300">This is the home page of our application.</p>
      </div>
    </div>
  );
};

export default Home;