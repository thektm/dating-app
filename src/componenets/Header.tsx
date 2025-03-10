import React from "react";
import MainNav from "./MainNav.tsx";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-400">
      <div className="flex items-center">
        <MainNav />
      </div>
    </header>
  );
};

export default Header;
