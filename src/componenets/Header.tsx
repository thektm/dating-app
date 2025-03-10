import React from "react";
import MainNav from "./MainNavigation.tsx";
import Hamburger from "./Hamburger.tsx";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-[#3498db]">
      <div className="flex items-center">
        <MainNav />
        <Hamburger/>
      </div>
    </header>
  );
};

export default Header;
