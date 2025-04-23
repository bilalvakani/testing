import React, { useEffect, useRef, useState } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
  Tooltip,
  Legend
);

const doctorData = {
  "Dr. Ali": [65, 78, 66, 44, 56, 67, 75],
  "Dr. Ahmed": [40, 68, 86, 74, 56, 60, 87],
  "Dr. Sara": [55, 60, 70, 80, 65, 75, 85],
  "Dr. Sajjad": [55, 90, 70, 30, 25, 13, 85],
  "Dr. faheem": [5, 10, 7, 70, 5, 1, 5],

};

const doctorColors = [
  "#4c51bf", 
  "#10b981", 
  "#f59e0b", 
  "#ef4444",
  "#3b82f6", 
];

const CardLineChart = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("All");
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const renderChart = () => {
    const ctx = chartRef.current.getContext("2d");

    let datasets = [];

    if (selectedDoctor === "All") {
      datasets = Object.entries(doctorData).map(([doctor, data], index) => ({
        label: doctor,
        data,
        borderColor: doctorColors[index % doctorColors.length],
        backgroundColor: doctorColors[index % doctorColors.length],
        fill: false,
      }));
    } else {
      datasets = [
        {
          label: selectedDoctor,
          data: doctorData[selectedDoctor],
          borderColor: "#4c51bf",
          backgroundColor: "#4c51bf",
          fill: false,
        },
      ];
    }

    const config = {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets,
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            align: "end",
            position: "bottom",
            labels: {
              color: "white",
            },
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        interaction: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          x: {
            ticks: {
              color: "rgba(255,255,255,.7)",
            },
            grid: {
              display: false,
            },
          },
          y: {
            ticks: {
              color: "rgba(255,255,255,.7)",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.15)",
            },
          },
        },
      },
    };

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, config);
  };

  useEffect(() => {
    renderChart();
  }, [selectedDoctor]);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-slate-700">
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center justify-between">
          <div className="text-white">
            <h2 className="text-white text-xl font-semibold">Income</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative h-[350px]">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default CardLineChart;
