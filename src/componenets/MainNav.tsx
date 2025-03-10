import React from "react";
import { useState, useEffect } from "react";

const MainNav: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleNav = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleNav);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleNav);
    };
  }, []);
  return (
    <>
      {width > 768 ? (
        <div className="flex justify-start ">
          <h2 className="p-2 m-2 ">Home</h2>
          <h2 className="p-2 m-2">About Us</h2>
          <h2 className="p-2 m-2">Contact Us</h2>
        </div>
      ) : (
        <img
          src="https://cdnlogo.com/logos/r/85/react.svg"
          alt="menu"
          className=" m-2 w-10 h-10 rounded-full"
        />
      )}
    </>
  );
};

export default MainNav;
