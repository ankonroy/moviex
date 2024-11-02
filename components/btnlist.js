import React from "react";
import Btn from "./btn";

function Btnlist({ setKeyword, setPageno, setSearchword, desWord }) {
  //   console.log(desWord);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {/* <Btn onclick={() => setKeyword("now_playing")}>Now Playing</Btn> */}
        {/* <Btn onclick={() => setKeyword("popular")}>Popular</Btn> */}
        {/* <Btn onclick={() => setKeyword("upcoming")}>Upcoming</Btn> */}
        {/* <Btn onclick={() => setKeyword("top_rated")}>Top rated</Btn> */}

        <Btn
          onclick={() => {
            setKeyword("now_playing");
            setPageno(1);
            setSearchword("");
          }}
          desWord={desWord}
        >
          Now Playing
        </Btn>
        <Btn
          onclick={() => {
            setKeyword("popular");
            setPageno(1);
            setSearchword("");
          }}
          desWord={desWord}
        >
          Popular
        </Btn>
        <Btn
          onclick={() => {
            setKeyword("upcoming");
            setPageno(1);
            setSearchword("");
          }}
          desWord={desWord}
        >
          Upcoming
        </Btn>
        <Btn
          onclick={() => {
            setKeyword("top_rated");
            setPageno(1);
            setSearchword("");
          }}
          desWord={desWord}
        >
          Top rated
        </Btn>
        {/* <Btn>Bangladesh</Btn>
        <Btn>International</Btn>
        <Btn>War</Btn>
        <Btn>Science</Btn> */}
      </div>
    </>
  );
}

export default Btnlist;
