// "use client";
// import React, { useState } from "react";

export default function Searchbar({ value, onChange, onClick }) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search..."
        className="w-full max-w-4xl px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 dark:text-gray-100"
      />
      <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        Search
      </button>
    </>
  );
}
