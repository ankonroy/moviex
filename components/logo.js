import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/img/movix-logo.png";

function Logo() {
  return (
    <>
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image src={logo} alt="Logo" className="h-10 w-10" />
        </Link>
      </div>
    </>
  );
}

export default Logo;
