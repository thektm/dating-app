
import { useTheme } from "../context/ThemeContext";


const ThemeToggle = () => {
  const {isDark, toggleTheme} = useTheme();
 
  return (
    <button
      onClick={() => toggleTheme()}
      className="p-2 flex  rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-all"
    >
      {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );

}
export default ThemeToggle;
