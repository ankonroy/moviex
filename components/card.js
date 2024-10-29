import Image from "next/image";
import Link from "next/link";
import React from "react";
import satoshi from "@/public/img/satoshi.jpg";

function Card({ index, children }) {
  const imgUrl = children?.poster_path
    ? `https://image.tmdb.org/t/p/original/${children?.poster_path}`
    : satoshi;

  return (
    <>
      <div className="flex flex-col justify-between mx-5 my-2 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full h-96">
          {/* This maintains 16:9 aspect ratio */}
          <Image fill src={imgUrl} alt="abs" />
        </div>
        {/* Content */}
        <div className="p-4 bottom-0">
          <h3 className="text-lg font-semibold">{children?.original_title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            {children?.overview.slice(0, 100) + "..."}
          </p>
        </div>
        <div className="p-4 bottom-0">
          <Link
            href={`/details/${children?.id}`}
            className="px-4 py-2 mt-2 inline-block bg-blue-500 text-white rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            Read more
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
