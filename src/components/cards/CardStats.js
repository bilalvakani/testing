
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
    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg shadow-md p-4 transition-all hover:shadow-lg">
        <h5 className="text-gray-500 uppercase !font-semibold text-xs">
            {statSubtitle}
        </h5>
        <div className="flex justify-between items-start">
          <div className="text-[20px] font-bold text-center text-neutral-600">{statCount}</div>
          <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ${statIconColor}`}>
            {statIconName}
          </div>
        </div>
        <p className="text-gray-500 text-[16px] !mt-4 flex justify-between items-center !mb-0">
          <span className="!font-medium">Last Month</span>
          <span className="">
            {statIncrement}
          </span>
        </p>
    </div>
  );
}
