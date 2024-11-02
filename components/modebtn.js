"use client";
// import { useTheme } from "next-themes";
// import React, { useEffect, useState } from "react";

function Modebtn() {
  //   const { theme, setTheme } = useTheme();

  //   const [mounted, setMounted] = useState(false);

  // Prevent theme mismatch between server and client
  //   useEffect(() => {
  //     setMounted(true);
  //   }, []);

  //   if (!mounted) return null;

  return (
    <>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 p-2 rounded-full focus:outline-none"
        >
          {/* {theme === "light" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.75 15.48a1 1 0 0 0-1.16-.68 8.92 8.92 0 0 1-10.4-10.4 1 1 0 0 0-.67-1.16 10 10 0 1 0 12.23 12.23z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <path
                d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )} */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="5" fill="currentColor" />
            <path
              d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Modebtn;
