"use client";
import AdminNavbar from "@/components/navbars/adminNavbar";
import TabContent from "@/components/tabs";
import React, { useState } from "react";
import bgImage from "@/assets/img/bgImage.jpg";
import CardLineChart from "@/components/cards/CardLineChart";

const Entities = () => {
  const [activeTab, setActiveTab] = useState("doctor");
  const tabs = [
    { id: "doctor", label: "Doctor" },
    { id: "clinic", label: "Clinic" },
    { id: "patient", label: "Patient" },
    { id: "appointment", label: "Appointment" },
    { id: "qualification", label: "Qualification" },
    { id: "specialization", label: "Specialization" },
  ];
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:mb-0 px-4 ">
          <div className="relative flex flex-wrap w-full">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                className={`flex-1 py-3 text-md text-center font-semibold
                  ${
                    index !== 0 && index !== tabs.length
                      ? "border-l border-gray-600"
                      : ""
                  } ${
                      activeTab === tab.id
                        ? "bg-gray-600 !text-white"
                        : "!bg-white text-gray-600"
                    } ${index === 0 ? "rounded-l-3xl" : ""} ${
                  index === tabs.length - 1 ? "rounded-r-3xl" : ""
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
