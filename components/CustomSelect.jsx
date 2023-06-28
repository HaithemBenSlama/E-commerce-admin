import React from "react";

const CustomSelect = ({ label, id, options }) => {
  return (
    <div>
      <label
        for="category"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <select
        id={id}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
      >
        {options?.map((op) => (
          <option selected={op?.selected} value={op?.value}>
            {op?.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
