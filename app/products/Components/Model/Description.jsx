import React from "react";

const Description = ({ desc }) => {
  return (
    <div>
      <dt className="mt-5 mb-2 font-semibold leading-none text-gray-900 dark:text-white">
        Description
      </dt>
      <dd className="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
        {desc}
      </dd>
    </div>
  );
};

export default Description;
