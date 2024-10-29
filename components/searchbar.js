import React from "react";

export default function Searchbar() {
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        className="w-full max-w-4xl px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-100"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
        Search
      </button>
    </>
  );
}
