import React from "react";
import Btn from "./btn";

function Btnlist() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        <Btn>Now Playing</Btn>
        <Btn>Popular</Btn>
        <Btn>Upcoming</Btn>
        <Btn>Top rated</Btn>
        {/* <Btn>Bangladesh</Btn>
        <Btn>International</Btn>
        <Btn>War</Btn>
        <Btn>Science</Btn> */}
      </div>
    </>
  );
}

export default Btnlist;
