import React from "react";

function Pagination({ pageno, setPageno, len }) {
  //   console.log(len, len === 20);
  return (
    <div className="flex justify-center items-center space-x-4 my-8">
      <button
        onClick={() => {
          if (pageno > 1) setPageno(pageno - 1);
        }}
        disabled={pageno <= 1} // Disable if on the first page
        className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          pageno <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-300"
        }`}
      >
        Previous
      </button>

      <span className="text-lg font-semibold">Page {pageno}</span>

      {len === 20 && (
        <button
          onClick={() => {
            setPageno(pageno + 1);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
