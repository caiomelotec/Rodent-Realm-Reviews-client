import { useState } from "react";
import { useSearchStore } from "../store/searchStore";
import { categories } from "../util/data";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonValue, setButtonValue] = useState("");
  const { setSearch } = useSearchStore();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        id="dropdown-button"
        onClick={toggleDropdown}
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600  dark:text-white dark:border-gray-600"
        type="button"
      >
        {buttonValue.length > 0 ? buttonValue : "Categories"}
        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute right-0 mt-2 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdown-button"
          >
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => {
                    toggleDropdown();
                    setButtonValue(category.name);
                    setSearch(category.name);
                    setButtonValue("");
                  }}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
