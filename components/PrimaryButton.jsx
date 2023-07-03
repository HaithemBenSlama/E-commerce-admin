import React from "react";

export default function PrimaryButton({ icon, text, onClick }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2"
      onClick={onClick}
    >
      {icon && icon}
      {text}
    </button>
  );
}
