import React from "react";

const NameCol = ({ hrefImg, name, email }) => {
  return (
    <div class="flex items-center space-x-3">
      <div class="flex-shrink-0">
        <img class="w-8 h-8 rounded-full" src={hrefImg} alt={name + " Image"} />
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-semibold text-gray-900 truncate">{name}</p>
        <p class="text-sm text-gray-500 truncate">{email}</p>
      </div>
    </div>
  );
};

export default NameCol;
