import React from "react";

function Submitbtn() {
  return (
    <>
      <div className="text-center">
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Submitbtn;
