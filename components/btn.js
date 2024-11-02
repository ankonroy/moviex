import React from "react";

function Btn({ children, onclick, desWord }) {
  console.log(desWord);
  console.log(children.toLowerCase().split(" ").join("_"));

  console.log(desWord == children);
  let des =
    desWord != children.toLowerCase().split(" ").join("_")
      ? "bg-blue-500 focus:ring-blue-400 hover:bg-blue-600"
      : "bg-red-500 focus:ring-red-400 hover:bg-red-600";
  return (
    <>
      <button
        onClick={onclick}
        className={`px-4 py-2  text-white rounded-lg  focus:outline-none focus:ring-2 ${des}`}
      >
        {children}
      </button>
    </>
  );
}

export default Btn;
