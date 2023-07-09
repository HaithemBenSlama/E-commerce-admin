import React from "react";

export default function Badge({ text, colorText, colorBg }) {
  const style = `text-xs font-medium mr-2 px-2.5 py-0.5 rounded ${colorBg} ${colorText}`;
  return <span className={style}>{text}</span>;
}
