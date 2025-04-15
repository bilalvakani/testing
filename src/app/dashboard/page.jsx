import HeaderStats from "@/components/headers/headerStat";
import AdminNavbar from "@/components/navbars/adminNavbar";
import React from "react";

// components

// import CardLineChart from "@/components/cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

function Dashboard() {
  return (
    <>
      <div className="relative md:ml-56 bg-[#0066a1]">
        <AdminNavbar title="Dashboard"/>
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              {/* <CardLineChart /> */}
            </div>
            {/* <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div> */}
          </div>
          {/* <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div> */}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
