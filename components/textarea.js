import React from "react";

function Textarea({ value, onChange }) {
  return (
    <>
      <textarea
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        rows="5"
        placeholder="Enter your message"
      ></textarea>
    </>
  );
}

export default Textarea;
