import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-purple-blurple h-screen">
      <Navbar />
      <img
        src="../../assets/home-random-icons.svg"
        className="w-2/3 rotate-12 absolute top-20 right-1/2"
        alt=""
      />
    </header>
  );
};

export default Header;
