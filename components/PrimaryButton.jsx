import { useRouter } from "next/navigation";
import React from "react";

export default function PrimaryButton({ icon, text, href }) {
  const router = useRouter();
  return (
    <button
      type="button"
      className="flex items-center justify-center text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-slate-600 dark:hover:bg-slate-700 focus:outline-none dark:focus:ring-slate-800"
      onClick={() => {
        router.push(href);
      }}
    >
      {icon && icon}
      {text}
    </button>
  );
}
