import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 p-6 flex justify-between items-center 
    bg-gradient-to-r from-primaryDark to-secondaryDark"
    >
      <Link href="/people">
        <h1 className="text-heading-2/h1 text-accentLight">Starwars</h1>
      </Link>

      <Link
        href="https://www.linkedin.com/in/darshan-gowda-8405b4153/"
        target="_blank"
        className="text-caption/c3 text-accentDark underline"
      >
        by darshan
      </Link>
    </div>
  );
};

export default Header;
