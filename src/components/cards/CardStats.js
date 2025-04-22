import React from "react";
import { ArrowDown,ArrowUp  } from 'lucide-react';

export default function CardStats({
  statSubtitle,
  statTitle,
  statIncrement,
  statIconName,
  statIconColor,
  statCount
}) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-neutral-900 uppercase !font-bold text-sm">
                {statSubtitle}
              </h5>
              <span className="font-semibold text-sm   text-blueGray-700">
                {statTitle}
                {statCount}
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                  statIconColor
                }
              >
                {statIconName}
              </div>
            </div>
          </div>
          <p className="text-sm text-blueGray-400 mt-4 flex">
            <span className={"mr-2 flex items-center"}>
              {statIncrement}
            </span>
            <span className="whitespace-nowrap">Since last month</span>
          </p>
        </div>
      </div>
    </>
  );
}
