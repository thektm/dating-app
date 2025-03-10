import { useState, useEffect, useCallback } from "react";

const MainNav: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleResize = useCallback(() => setWidth(window.innerWidth), []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <nav className="flex items-center p-2">
      {width > 768 ? (
        <div className="flex space-x-4">
          {["Home", "About Us", "Contact Us"].map((item) => (
            <h2 key={item} className="p-2">
              {item}
            </h2>
          ))}
        </div>
      ) : (
        <img
          src="https://cdnlogo.com/logos/r/85/react.svg"
          alt="menu"
          className="m-2 w-10 h-10 rounded-full cursor-pointer"
        />
      )}
    </nav>
  );
};

export default MainNav;
