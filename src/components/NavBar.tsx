import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const path = useLocation().pathname;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Rodent Realm Reviews
          </span>
          <img src={logo} className="h-14 w-14" alt="Logo" />
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3  rounded md:bg-transparent  md:p-0 dark:text-white ${
                  path === "/"
                    ? "text-blue-700 dark:text-blue-700"
                    : "text-black"
                }  text-xl`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
                text-xl ${
                  path === "/about"
                    ? "text-blue-700 dark:text-blue-700"
                    : "text-black"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl ${
                  path === "/login"
                    ? "text-blue-700 dark:text-blue-700"
                    : "text-black"
                }`}
              >
                Login
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
