import React from "react";

export default function CardPageVisits() {
  return (
    <>
      <div className="relative flex flex-col break-words bg-white w-full shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-2 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Page visits
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto rounded-b overflow-hidden">
          <table className="min-w-full bg-transparent border-collapse table-auto">
            <thead className="thead-light">
              <tr>
                <th className="px-5 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Page name
                </th>
                <th className="px-5 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Visitors
                </th>
                <th className="px-5 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Unique users
                </th>
                <th className="px-5 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Bounce rate
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["/argon/", "4,569", "340", "up", "46,53%"],
                ["/argon/index.html", "3,985", "319", "down", "46,53%"],
                ["/argon/charts.html", "3,513", "294", "down", "36,49%"],
                ["/argon/tables.html", "2,050", "147", "up", "50,87%"],
                ["/argon/profile.html", "1,795", "190", "down", "46,53%"],
              ].map(([page, visitors, users, trend, rate], index) => (
                <tr key={index}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                    {page}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {visitors}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {users}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i
                      className={`fas fa-arrow-${trend} ${
                        trend === "up"
                          ? "text-emerald-500"
                          : trend === "down"
                          ? "text-orange-500"
                          : "text-red-500"
                      } mr-4`}
                    ></i>
                    {rate}
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
