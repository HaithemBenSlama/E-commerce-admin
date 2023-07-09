import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

export default function FiltreButton({ text, categories }) {
  const [filtreShow, setFiltreshow] = useState(false);
  const styleFiltreShow =
    "z-10 w-48 p-3 bg-white rounded-lg shadow absolute right-0 mt-2 bg-gray-100 overflow-y-auto max-h-52";
  const styleFiltreHide = "z-10 hidden w-48 p-3 bg-white rounded-lg shadow";

  return (
    <div style={{ position: "relative" }}>
      <button
        id="filterDropdownButton"
        data-dropdown-toggle="filterDropdown"
        className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-slate-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        type="button"
        onClick={() => {
          setFiltreshow(!filtreShow);
        }}
      >
        <FaFilter className="h-4 w-4 mr-2 text-gray-400" />
        Filter
        <BsChevronDown className="-mr-1 ml-1.5 w-4 h-4" />
      </button>
      <div
        id="filterDropdown"
        className={filtreShow ? styleFiltreShow : styleFiltreHide}
      >
        <h6 className="mb-3 text-sm font-medium border-b-2 text-gray-900 dark:text-white">
          {text}
        </h6>
        <ul
          className="space-y-2 text-sm"
          aria-labelledby="filterDropdownButton"
        >
          {categories?.map((c, index) => (
            <li className="flex items-center" key={index}>
              <input
                id={c?.id}
                type="checkbox"
                className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-slate-600 focus:ring-slate-500 dark:focus:ring-slate-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor={c?.id}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                {c?.name} ({c?.nb_product})
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
