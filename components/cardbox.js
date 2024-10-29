import React from "react";
import Card from "./card";
import fetchData from "@/utils/util";

async function Cardbox() {
  const posts = await fetchData();

  return (
    <>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Repeat the card block 20 times */}
        {/* {Array.from({ length: 20 }, (_, index) => (
          <Card key={index} index={index} ></Card>
        ))} */}
        {posts.map((post) => (
          <Card key={post.id}>{post}</Card>
        ))}
      </div>
    </>
  );
}

export default Cardbox;
