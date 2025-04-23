"use client";
import AdminNavbar from "@/components/navbars/adminNavbar";
import TabContent from "@/components/tabs";
import React, { useState } from "react";
import bgImage from "@/assets/img/bgImage.jpg";
import CardLineChart from "@/components/cards/CardLineChart";
import { useSelector } from "react-redux";

const Entities = () => {
  const [activeTab, setActiveTab] = useState("doctor");
  const user = useSelector((state) => state.auth.user);
  console.log(user,"user")
  const tabs = [
    { 
      id: "doctor",
      label: "Doctor",
      type: [4,5]
    },
    { 
      id: "clinic",
      label: "Clinic",
      type: [4,5]
    },
    { 
      id: "patient",
      label: "Patient",
      type: [4,5]
    },
    { 
      id: "appointment",
      label: "Appointment",
      type: [4,5]
    },
    { 
      id: "qualification",
      label: "Qualification",
      type: [5]
    },
    { 
      id: "specialization",
      label: "Specialization",
      type: [5]
    },
  ];
  const filterTab = tabs.filter((tab) =>
    tab.type.includes(parseInt(user?.type))
  )
  console.log(filterTab)
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:mb-0 px-4 ">
          <div className="relative flex flex-wrap w-full">
            {filterTab.map((tab, index) => (
              <button
                key={tab.id}
                className={`flex-1 py-3 text-md text-center font-semibold
                  ${
                    index !== 0 && index !== filterTab.length
                      ? "border-l border-gray-600"
                      : ""
                  } ${
                      activeTab === tab.id
                        ? "bg-gray-600 !text-white"
                        : "!bg-white text-gray-600"
                    } ${index === 0 ? "rounded-l-3xl" : ""} ${
                  index === filterTab.length - 1 ? "rounded-r-3xl" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4 ">
          <div className="relative flex">
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Entities;
