"use client";
import React, { useEffect, useState } from "react";
import Card from "./card";
import fetchData from "@/utils/util";
import Pagination from "./pagination";
import Btnlist from "./btnlist";

export default function Cardbox({ searchword, setSearchword }) {
  //   const posts = await fetchData();
  //   console.log(posts);
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState("now_playing");
  const [pageno, setPageno] = useState(1);

  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  let desWord = searchword === "" ? keyword : searchword;

  //   console.log(desWord);

  useEffect(() => {
    //     // Define the fetch function
    const fetchMovies = async () => {
      setLoading(true); // Start loading
      setError(null);
      const data = await fetchData(keyword, pageno, searchword);
      if (data) {
        setPosts(data); // Update movies state with fetched data
      } else {
        setError("Failed to fetch data"); // Set an error if fetchData returns null
      }
      setPosts(data);
      setLoading(false);
    };

    fetchMovies();
  }, [keyword, pageno, searchword]); // Empty dependency array to fetch data only on mount

  //   console.log(posts);

  //   function handleKeyword(new_word) {
  //     setKeyword(new_word);
  //   }

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center h-20">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin"></div>
        </div>
        <h1 className="text-center text-2xl font-semibold mt-6">Loading...</h1>
      </>
    );
  }
  if (error) return <p>Error: {error}</p>; // Show error message

  return (
    <>
      <Btnlist
        setKeyword={setKeyword}
        setPageno={setPageno}
        setSearchword={setSearchword}
        desWord={desWord}
      />
      {searchword !== "" && (
        <p className="mx-auto mt-10 text-center">
          Showing Result for &quot;{searchword}&quot;
        </p>
      )}
      {/* <button
        onClick={() => handleKeyword("top_rated")}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {" "}
        top rated
      </button> */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Repeat the card block 20 times */}
        {/* {Array.from({ length: 20 }, (_, index) => (
          <Card key={index} index={index} ></Card>
        ))} */}
        {posts.map((post) => (
          <Card key={post.id}>{post}</Card>
        ))}
      </div>
      <Pagination pageno={pageno} setPageno={setPageno} len={posts.length} />
    </>
  );
}
