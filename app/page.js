"use client";

import Searchbar from "@/components/searchbar";
import Navbar from "@/components/navbar";
import Logo from "@/components/logo";
import Modebtn from "@/components/modebtn";
import Cmntbtn from "@/components/cmntbtn";
import Cardbox from "@/components/cardbox";
import { useState } from "react";
export default function Home() {
  const [searchword, setSearchword] = useState("");
  const [search, setSearch] = useState("");

  //   console.log(search);
  return (
    <>
      <Navbar>
        <Logo />
        <Modebtn />
      </Navbar>
      <header className="bg-gray-100 dark:bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-6">
            Search for the movie you want to watch
          </h1>

          <div className="flex justify-center">
            <Searchbar
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              onClick={(e) => {
                e.preventDefault();
                setSearchword(search);
                setSearch("");
              }}
            />
          </div>

          <div className="flex justify-center mt-6">
            <Cmntbtn />
          </div>
        </div>
      </header>
      <section className="dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto py-10 ">
          <Cardbox searchword={searchword} setSearchword={setSearchword} />
        </div>
      </section>
    </>
  );
}
