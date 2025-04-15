import React from "react";
import Sidebar from "../sideBar/sidebar";
import AdminNavbar from "../navbars/adminNavbar";
import HeaderStats from "../headers/headerStat";

const ChildrenBody = ({children}) => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-56 bg-[#0066a1]">
        <AdminNavbar />
        <HeaderStats />
        {/* <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div> */}
      </div>
    </>
  );
};

export default ChildrenBody;
