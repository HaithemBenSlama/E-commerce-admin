import React from "react";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start bg-slate-200">
      <SideBar />
      <div className="bg-slate-50 flex-grow ml-72 m-7 rounded-lg p-4 shadow-2xl max-h-[calc(100vh-4rem)] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default Layout;
