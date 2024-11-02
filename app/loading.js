// import { ThemeProvider } from "next-themes";
import React from "react";

function Loading() {
  return (
    <>
      {/* <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
      > */}
      <div className="flex items-center justify-center h-screen dark:bg-gray-900 dark:text-gray-100">
        <div className="w-12 h-12 border-4 border-gray-300 dark:border-gray-600 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin"></div>
        <h1 className="text-center text-2xl font-semibold mt-6 dark:text-gray-100">
          Loading...
        </h1>
      </div>
      {/* </ThemeProvider> */}
    </>
  );
}

export default Loading;
