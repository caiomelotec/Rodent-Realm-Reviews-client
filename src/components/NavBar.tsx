import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";
import { NavItem } from "./NavItem";
import { SearchForm } from "./SearchForm";
import { useSearchStore } from "../store/searchStore";

export const Navbar = () => {
  const path = useLocation().pathname;
  const { setSearch } = useSearchStore();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => setSearch("")}
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Rodent Realm Reviews
          </span>
          <img src={logo} className="h-14 w-14" alt="Logo" />
        </Link>
        <SearchForm />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavItem path={path} to="/" label="Home" />
            <NavItem path={path} to="/about" label="About" />
            <NavItem path={path} to="/login" label="Login" />
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
