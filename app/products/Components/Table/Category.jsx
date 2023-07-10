import React from "react";

const Category = ({ category }) => {
  return (
    <span className="bg-blue-100 text-xs font-medium px-2 py-0.5 rounded">
      {category}
    </span>
  );
};

export default Category;
