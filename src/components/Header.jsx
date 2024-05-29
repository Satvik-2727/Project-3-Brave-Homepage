import React from "react";
import Navbar from "./Navbar";
import GetBrave from "./GetBrave";
import { HeaderContent } from "..";

const Header = () => {
  return (
    <header className="bg-purple-blurple relative h-[150vh] overflow-hidden">
      <Navbar />
      <img
        src="../../assets/home-random-icons.svg"
        className="w-2/3 rotate-12 absolute top-20 right-1/2"
        alt=""
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 w-full origin-center transform scale-110"
        fill="none"
        viewBox="0 0 2262 263"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 33.3596C0 33.3596 870 157.138 1318 131.5C1766 105.862 2262 0 2262 0V263H0L0 33.3596Z"
          fill="white"
        ></path>
      </svg>
      <div className=" flex flex-col items-center">
        <div className="flex flex-col items-center space-y-5">
          <div className="font-semibold text-white text-5xl tracking-wide">
            {HeaderContent[0]}
          </div>
          <div className=" text-white text-2xl">
            {HeaderContent[1]}
          </div>
          <div className="text-white italic">{HeaderContent[2]}</div>
        </div>

        <div className="my-14">
          <GetBrave content="Get Brave" />
        </div>

        <img
          src="../../assets/desktop-hero-screenshot.png"
          className="w-[80%]"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
