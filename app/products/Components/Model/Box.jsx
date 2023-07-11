import React from "react";

const Box = ({ title, text }) => {
  return (
    <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
      <dt className="mb-2 font-semibold leading-none text-gray-900 dark:text-white">
        {title}
      </dt>
      <dd className="font-light text-gray-500 dark:text-gray-400">{text}</dd>
    </div>
  );
};

export default Box;
