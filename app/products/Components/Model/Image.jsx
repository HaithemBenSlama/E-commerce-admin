import React from "react";

const Image = ({ srcImage }) => {
  return (
    <div className="bg-slate-100 p-5 rounded-xl shadow-lg max-h-36 flex items-center justify-center">
      <img className="h-full max-w-full rounded-lg" src={srcImage} alt="" />
    </div>
  );
};

export default Image;
