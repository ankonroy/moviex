import React from "react";

function Input({ title, children }) {
  return (
    <>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 text-sm font-semibold mb-2">
          {title}
        </label>
        {children}
      </div>
    </>
  );
}

export default Input;
