"use client"
import React from "react";
import UserDropdown from "../Dropdowns/UserDropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";

function AdminNavbar() {
  const pathName = usePathname()

  const title = pathName.split("/")[2] || pathName.split("/")[1]
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 md:flex-row md:flex-nowrap md:justify-start flex items-center py-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-6 px-4">
          <Link
            className="text-white text-lg uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            // onClick={(e) => e.preventDefault()}
          >
            {title}
          </Link>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown/>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}

export default AdminNavbar;