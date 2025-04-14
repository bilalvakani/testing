
import React from "react";

// components

export default function CardSocialTraffic() {
  return (
    <>
      <div className="relative flex flex-col mb-6 break-words bg-white w-full shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-2 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-2 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Social traffic
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See all
              </button>
            </div>
          </div>
        </div>
        <div className="block w-full  rounded-b overflow-hidden">
        <table className="min-w-full bg-transparent border-collapse table-auto">
        <thead className="thead-light">
              <tr>
                <th className="px-5 py-3 text-xs uppercase font-semibold text-left text-blueGray-500 border-b border-blueGray-200 bg-blueGray-50">
                  Referral
                </th>
                <th className="px-5 py-3 text-xs uppercase font-semibold text-left text-blueGray-500 border-b border-blueGray-200 bg-blueGray-50">
                  Visitors
                </th>
                <th className="px-5 py-3 text-xs uppercase font-semibold text-left text-blueGray-500 border-b border-blueGray-200 bg-blueGray-50 min-w-140-px">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Facebook", visitors: "1,480", percent: "60%", color: "bg-red-500", bg: "bg-red-200", width: "60%" },
                { name: "Facebook", visitors: "5,480", percent: "70%", color: "bg-emerald-500", bg: "bg-emerald-200", width: "70%" },
                { name: "Google", visitors: "4,807", percent: "80%", color: "bg-purple-500", bg: "bg-purple-200", width: "80%" },
                { name: "Instagram", visitors: "3,678", percent: "75%", color: "bg-sky-500", bg: "bg-sky-200", width: "75%" },
                { name: "Twitter", visitors: "2,645", percent: "30%", color: "bg-orange-500", bg: "bg-orange-200", width: "30%" },
              ].map((item, index) => (
                <tr key={index}>
                  <th className="px-6 py-4 text-xs text-left align-middle whitespace-nowrap font-normal text-blueGray-700 border-b border-blueGray-100">
                    {item.name}
                  </th>
                  <td className="px-6 py-4 text-xs align-middle whitespace-nowrap border-b border-blueGray-100">
                    {item.visitors}
                  </td>
                  <td className="px-6 py-4 text-xs align-middle whitespace-nowrap border-b border-blueGray-100">
                    <div className="flex items-center">
                      <span className="mr-2">{item.percent}</span>
                      <div className="relative w-full">
                        <div className={`overflow-hidden h-2 text-xs flex rounded ${item.bg}`}>
                          <div
                            style={{ width: item.width }}
                            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${item.color}`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
