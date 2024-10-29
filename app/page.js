import logo from "@/public/img/logo.png";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "@/components/searchBar";
import Navbar from "@/components/navbar";
import Logo from "@/components/logo";
import Modebtn from "@/components/modebtn";
import Cmntbtn from "@/components/cmntbtn";
import Btn from "@/components/btn";
import Card from "@/components/card";
import Btnlist from "@/components/btnlist";
import Cardbox from "@/components/cardbox";
import fetchData from "@/utils/util";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar>
        {/* Logo */}
        <Logo />
        {/*Mode toggling button*/}
        <Modebtn />
      </Navbar>
      {/* Header Section */}
      <header className="bg-gray-100 dark:bg-gray-800 py-10">
        <div className="container mx-auto px-4">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-6">
            Search for the movie you want
          </h1>

          {/* Search Bar */}
          <div className="flex justify-center">
            <Searchbar />
          </div>

          {/* Button (Below Search Bar) */}
          <div className="flex justify-center mt-6">
            <Cmntbtn />
          </div>
        </div>
      </header>

      <section>
        <div className="container mx-auto py-10">
          {/* Button List */}
          <Btnlist />
          {/* This section is to display all the cards */}
          <Cardbox />
        </div>
      </section>
    </>
  );
}
