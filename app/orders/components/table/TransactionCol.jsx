import React from "react";

const TransactionCol = ({ text, specialText }) => {
  return (
    <div>
      <p class="text-gray-500 dark:text-gray-400">
        {text}
        <a
          href="#"
          class="font-semibold text-gray-900 underline dark:text-white decoration-indigo-500"
        >
          {specialText}
        </a>
      </p>
    </div>
  );
};

export default TransactionCol;
