import React from "react";

function Loading() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
      <h1 className="text-center text-2xl font-semibold mt-6">Loading...</h1>
    </>
  );
}

export default Loading;
