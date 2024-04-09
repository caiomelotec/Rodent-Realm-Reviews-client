import { Link } from "react-router-dom";

type NavItem = {
  path: string;
  to: string;
  label: string;
};

export const NavItem = ({ path, to, label }: NavItem) => {
  const isActive = path === to;
  const activeClassName = isActive
    ? "text-blue-700 dark:text-blue-700"
    : "text-black dark:text-white";
  return (
    <li>
      <Link to={to} className={`text-xl ${activeClassName}`}>
        {label}
      </Link>
    </li>
  );
};