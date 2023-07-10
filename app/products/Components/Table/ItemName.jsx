import React from "react";

const ItemName = ({ name, hrefImg }) => {
  return (
    <div className="flex items-center py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      <img src={hrefImg} alt={name + " Image"} className="w-auto h-8 mr-3" />
      {name}
    </div>
  );
};

export default ItemName;
