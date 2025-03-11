import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const MainNav: React.FC = () => {
  const navigate = useNavigate();
  const isDark = useTheme().isDark;
  return (
    <nav className="flex justify-start items-center p-2 lg:w-[85%]">
      <img
        src="https://cdnlogo.com/logos/r/85/react.svg"
        alt="menu"
        className="m-2 w-10 h-10 rounded-full cursor-pointer"
      />
      <div
        className={`hidden lg:flex justify-center items-center lg:w-[85%]
          ${isDark ? ` text-white  ` : ` text-black  `}`}
      >
        <h2
          onClick={() => {
            navigate("/home");
          }}
          className="p-2 mx-6 cursor-pointer border-4 hover:border-0 
          hover:shadow-2xl hover:shadow-black transition-all duration-200 border-[#1abc9c] rounded-4xl "
        >
          Home
        </h2>
        <h2
          onClick={() => {
            navigate("/about");
          }}
          className="p-2 mx-6 cursor-pointer border-4 hover:border-0
           hover:shadow-2xl hover:shadow-black transition-all duration-200 border-[#1abc9c] rounded-4xl"
        >
          About Us
        </h2>
        <h2
          onClick={() => {
            navigate("/contact");
          }}
          className="p-2 mx-6 cursor-pointer border-4 hover:border-0 
          hover:shadow-2xl hover:shadow-black transition-all duration-200 border-[#1abc9c] rounded-4xl"
        >
          Contact Us
        </h2>
      </div>
    </nav>
  );
};

export default MainNav;
