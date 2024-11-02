import React from "react";
// import Logo from "./logo";
// import Modebtn from "./modebtn";

function Navbar({ children }) {
  return (
    <>
      <nav className="bg-white dark:bg-gray-800 shadow-md dark">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {children}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
