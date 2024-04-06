import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useEffect } from "react";
import { useDarkModeStore } from "../store/themeStore";
export const ThemeToggle = () => {
  const { darkMode, setDarkMode, theme } = useDarkModeStore();

  useEffect(() => {
    if (theme === "dark") {
      setDarkMode(true);
    }
    if (theme === "light") {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    // second useEffect handling theme persistence
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (darkMode === false) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div onClick={() => setDarkMode(!darkMode)}>
      <label className="swap swap-rotate flex">
        {darkMode ? (
          <FaRegMoon
            className="cursor-pointer dark:text-white z-10 text-block"
            size={30}
          />
        ) : (
          <FiSun
            className="cursor-pointer dark:text-white text-black"
            size={35}
          />
        )}
      </label>
    </div>
  );
};
