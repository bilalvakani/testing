
import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function CardStats({
  statSubtitle,
  statTitle,
  statIncrement,
  statIconName,
  statIconColor,
  statCount,
}) {
  const isPositive = parseFloat(statIncrement) >= 0;

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 shadow-md p-4 transition-all hover:shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <h5 className="text-gray-500 uppercase font-semibold text-xs mb-1">
            {statSubtitle}
          </h5>
          <div className="text-xl font-bold text-gray-800">{statCount}</div>
          <p className="text-sm text-gray-500 mt-1">{statTitle}</p>
        </div>

        <div
          className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${statIconColor}`}
        >
          {statIconName}
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-4 flex items-center">
        <span className={`mr-2 flex items-center font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
          {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          &nbsp;{statIncrement}
        </span>
        <span>Since last month</span>
      </p>
    </div>
  );
}
