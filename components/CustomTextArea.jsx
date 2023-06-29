import React from "react";

const CustomTextArea = () => {
  return (
    <div>
      <label
        htmlFor="description"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Description
      </label>
      <textarea
        id="description"
        rows="8"
        className="block p-2.5 w-full h-32 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder="Your description here"
      ></textarea>
    </div>
  );
};

export default CustomTextArea;
