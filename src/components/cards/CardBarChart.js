
'use client';
import React from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register necessary components
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend, Title);

export default function CardBarChart() {
  React.useEffect(() => {
    let config = {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: new Date().getFullYear(),
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: [30, 78, 56, 34, 100, 45, 13],
            fill: false,
            barThickness: 8,
          },
          {
            label: new Date().getFullYear() - 1,
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [27, 68, 86, 74, 10, 4, 87],
            barThickness: 8,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: "rgba(0,0,0,.4)",
            },
            align: "end",
            position: "bottom",
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
          title: {
            display: false,
            text: "Orders Chart",
          },
        },
        scales: {
          x: {
            grid: {
              color: "rgba(33, 37, 41, 0.3)",
              borderDash: [2],
              zeroLineColor: "rgba(33, 37, 41, 0.3)",
            },
            display: false,
            title: {
              display: true,
              text: "Month",
            },
          },
          y: {
            grid: {
              color: "rgba(33, 37, 41, 0.2)",
              borderDash: [2],
              drawBorder: false,
              zeroLineColor: "rgba(33, 37, 41, 0.15)",
            },
            display: true,
            title: {
              display: false,
              text: "Value",
            },
          },
        },
      },
    };

    let ctx = document.getElementById("bar-chart").getContext("2d");
    new Chart(ctx, config);
  }, []);

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            
            <h2 className="text-blueGray-700 text-xl font-semibold">
              Total Patients
            </h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-[350px]">
          <canvas id="bar-chart"></canvas>
        </div>
      </div>
    </div>
  );
}
