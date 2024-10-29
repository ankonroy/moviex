import Link from "next/link";
import React from "react";

function Cmntbtn() {
  return (
    <>
      <Link href="/form">
        <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none">
          Leave Comment
        </button>
      </Link>
    </>
  );
}

export default Cmntbtn;
