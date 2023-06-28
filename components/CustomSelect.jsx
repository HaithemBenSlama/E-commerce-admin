import React from "react";

const CustomSelect = ({ label, id, options, error, errorMessage }) => {
  const errorLabelStyle =
    "block mb-2 text-sm font-medium text-red-700 dark:text-red-500";
  const labelStyle =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  const inputStyle =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500";
  const errorInputStyle =
    "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
  const errorDescStyle = "mt-2 text-sm text-red-600 dark:text-red-500";
  return (
    <div>
      <label for="category" class={error ? errorLabelStyle : labelStyle}>
        {label}
      </label>
      <select id={id} class={error ? errorInputStyle : inputStyle}>
        {options?.map((op) => (
          <option selected={op?.selected} value={op?.value}>
            {op?.text}
          </option>
        ))}
      </select>
      <p class={error ? errorDescStyle : "hidden"}>{errorMessage}</p>
    </div>
  );
};

export default CustomSelect;
