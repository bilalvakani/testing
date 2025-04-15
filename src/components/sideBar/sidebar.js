"use client"
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu,X,LayoutDashboard,Wrench,Boxes,LogOut } from 'lucide-react';
import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "@/components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-gray-100 flex flex-wrap items-center justify-between relative md:w-56 z-10 py-4 px-6 rounded-2xl">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <button
            className="cursor-pointer text-neutral-800 opacity-50 md:hidden px-1 py-1 text-xl leading-none bg-transparent rounded border border-solid border-gray-600"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <Menu className=""/>
          </button>
          <Link href="/" className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-2xl uppercase font-bold px-0">
            AL-TABIB
          </Link>
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          <div
            className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-1 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`
            }
          >
            <div className="md:min-w-full md:hidden block">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/" className="md:block text-left md:pb-2 text-gray-600 mr-0 inline-block whitespace-nowrap text-xl uppercase font-bold px-0">
                      AL-TABIB
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <X />
                  </button>
                </div>
              </div>
            </div>
            <form className="mt-1 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid border-gray-600 placeholder-blueGray-300 text-gray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            <hr className="md:none my-4 md:my-0 md:min-w-full" />
            <ul className="md:flex-col md:min-w-full flex flex-col list-none mt-2">
              <li className="items-center">
                <Link href="/dashboard" className="text-xs text-neutral-800 uppercase py-3 font-semibold flex gap-3 items-center">
                    <LayoutDashboard size={20}/>
                    Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link href="/dashboard/entities" className="text-xs text-neutral-800 uppercase py-3 font-semibold flex gap-3 items-center">
                    <Boxes size={20}/>
                    Entities
                </Link>
              </li>

              <li className="items-center">
                <Link href="/settings" className="text-xs text-neutral-800 uppercase py-3 font-semibold flex gap-3 items-center" >
                    <Wrench size={20} />
                    Settings
                </Link>
              </li>

              {/* <li className="items-center">
                <Link href="/logout" className="text-xs text-neutral-800 uppercase py-3 font-semibold flex gap-3 items-center">
                    <LogOut  size={20}/>
                    Logout
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
