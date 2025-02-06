import React from "react";

const Shimmer = () => {
  const array = Array.from({ length: 10 }); // Generate an array of 10 placeholders

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
      {array.map((_, index) => (
        <div
          key={index}
          className="w-full sm:w-72 md:w-80 h-96 bg-gray-200 animate-pulse rounded-lg p-4 shadow-md"
        >
          <div className="h-48 bg-gray-300 rounded-md"></div>
          <div className="h-6 bg-gray-300 rounded-md mt-4 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded-md mt-2 w-1/2"></div>
          <div className="h-10 bg-gray-300 rounded-md mt-4"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
