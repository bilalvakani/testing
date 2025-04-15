"use client";
import AdminNavbar from "@/components/navbars/adminNavbar";
import TabContent from "@/components/tabs";
import React, { useState } from "react";
import bgImage from "@/assets/img/bgImage.jpg";

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
      <div className="relative md:ml-56 bg-[#0066a1] min-h-screen">
        <AdminNavbar title="Entities" />
        <div className="relative bg-blueGray-800 md:pt-24 pt-12">
          <div className="px-4 md:px-6 mx-auto w-full">
            <div className="flex flex-wrap">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  className={`px-6 py-3 font-medium text-md transition-colors 
                    ${
                      activeTab === tab.id
                        ? "bg-white text-gray-600"
                        : "bg-gray-600 text-white hover:bg-[#004c91]"
                    } ${index === 0 ? "rounded-l-3xl" : ""} ${
                    index === tabs.length - 1 ? "rounded-r-3xl" : ""
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Entities;
