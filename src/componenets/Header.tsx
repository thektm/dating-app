import React from "react";
import MainNav from "./MainNav.tsx";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full  bg-slate-400">
      <div className="flex justify-start items-start">
        <MainNav />
      </div>
    </div>
  );
};

export default Header;
