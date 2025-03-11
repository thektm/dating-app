import React, { useState } from "react";
import MainNav from "./MainNavigation";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemToggle";
import { useTheme } from "../context/ThemeContext";
import UserSection from "./UserSection";
import MobileUser from "./MobileUser";
import Button from "./Button";

const Header: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [mobileReg, setMobileReg] = useState(false);
  const isDark = useTheme().isDark;

  return (
    <header
      className={
        isDark
          ? `fixed top-0 left-0 w-full bg-[#2b87c4]`
          : `fixed top-0 left-0 w-full bg-[#fdfdfd]`
      }
    >
      <div className="flex items-center md:justify-between sm:justify-evenly">
        <MainNav />
        <ThemeToggle />
        <MobileUser onClick={() => setMobileReg(!mobileReg)} />
        <UserSection />
        <Hamburger
          className=" w-[10%]  lg:hidden   ml-auto"
          onClick={() => setShowMessage(!showMessage)}
        />
        {mobileReg && (
          <div className="absolute left-1/2 top-full mt-2 transform -translate-x-1/2 w-fit bg-[#3498db] text-black p-4 rounded shadow-md">
            <div className="flex-row items-center justify-center w-full">
              <Button
                className="bg-blue-500 text-white p-4  rounded max-w-3xs max-h-3xs m-2  mx-auto block"
                onClick={() => {}}
                text="login"
              />
              <Button
                className="bg-blue-500 text-white p-4 rounded max-w-3xs max-h-3xs m-2 block"
                onClick={() => {}}
                text="sign up"
              />
            </div>
          </div>
        )}
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
