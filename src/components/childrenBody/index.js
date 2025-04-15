import React from "react";
import Sidebar from "../sideBar/sidebar";
import AdminNavbar from "../navbars/adminNavbar";
import HeaderStats from "../headers/headerStat";

const ChildrenBody = ({children}) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default ChildrenBody;
