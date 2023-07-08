import React from "react";

const Stock = ({ stock }) => {
  let stockClass;

  if (stock < 50) {
    stockClass = "bg-red-700";
  } else if (stock < 100) {
    stockClass = "bg-red-500";
  } else if (stock < 150) {
    stockClass = "bg-orange-500";
  } else if (stock < 300) {
    stockClass = "bg-yellow-300";
  } else {
    stockClass = "bg-green-500";
  }

  return (
    <div className="flex items-center">
      <div className={`inline-block w-4 h-4 mr-2 rounded-full ${stockClass}`} />
      {stock}
    </div>
  );
};

export default Stock;
