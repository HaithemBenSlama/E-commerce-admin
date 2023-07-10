import React from "react";

const NameCol = ({ hrefImg, name, email }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0">
        <img
          className="w-8 h-8 rounded-full"
          src={hrefImg}
          alt={name + " Image"}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 truncate">{name}</p>
        <p className="text-sm text-gray-500 truncate">{email}</p>
      </div>
    </div>
  );
};

export default NameCol;
