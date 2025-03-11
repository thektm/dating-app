import React, { useState } from "react";
import MainNav from "./MainNavigation";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemToggle";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const isDark = useTheme().isDark;
  return (
    <header
      className={
        isDark
          ? `fixed top-0 left-0 w-full bg-[#2b87c4]`
          : `fixed top-0 left-0 w-full bg-[#fdfdfd]`
      }
    >
      <div className="flex">
        <MainNav />
        <ThemeToggle />
        <Hamburger
          className="flex w-[100%] justify-end items-center lg:hidden md:justify-center mx-2"
          onClick={() => setShowMessage(!showMessage)}
        />
        {showMessage && (
          <div className="absolute text-black top-16 left-0 w-full bg-[#3498db] ">
            <h2 className="text-lg font-bold mb-2">Menu</h2>
            <Link to="/home">
              <span className=" text-black block">Home</span>
            </Link>
            <Link to="/about" className="text-white">
              <span className="text-black block">About</span>
            </Link>
            <Link to="/contact" className="text-white">
              <span className="text-black block">Contact</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
