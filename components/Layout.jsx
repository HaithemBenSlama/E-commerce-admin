import React from "react";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <SideBar />
      <div className="bg-slate-200 flex-1 pl-64">{children}</div>
    </div>
  );
};

export default Layout;
