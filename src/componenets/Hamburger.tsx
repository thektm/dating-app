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
        className={` max-w-8 max-h-8 cursor-pointer`}
        onClick={onClick}
      />
    </div>
  );
};

export default Hamburger;
