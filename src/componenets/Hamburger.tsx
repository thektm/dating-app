import React from "react";
interface HamburgerPropss {
  onClick: () => void;
  className?: string;
}
const Hamburger: React.FC<HamburgerPropss> = ({ className, onClick }) => {
  return (
    <div className={`${className}`}>
      <img
        src="https://www.svgrepo.com/download/525355/hamburger-menu.svg"
        alt="svg"
        className={` w-10 h-10 rounded-full cursor-pointer `}
        onClick={onClick}
      />
    </div>
  );
};

export default Hamburger;
