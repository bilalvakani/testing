// import React, { useEffect } from "react";
// import {
//   Chart,
//   LineController,
//   LineElement,
//   PointElement,
//   LinearScale,
//   Title,
//   CategoryScale,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register required components
// Chart.register(
//   LineController,
//   LineElement,
//   PointElement,
//   LinearScale,
//   Title,
//   CategoryScale,
//   Tooltip,
//   Legend
// );

// const CardLineChart = () => {
//   useEffect(() => {
//     const config = {
//       type: "line",
//       data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [
//           {
//             label: new Date().getFullYear(),
//             backgroundColor: "#4c51bf",
//             borderColor: "#4c51bf",
//             data: [65, 78, 66, 44, 56, 67, 75],
//             fill: false,
//           },
//           {
//             label: new Date().getFullYear() - 1,
//             backgroundColor: "#fff",
//             borderColor: "#fff",
//             data: [40, 68, 86, 74, 56, 60, 87],
//             fill: false,
//           },
//         ],
//       },
//       options: {
//         responsive: true,
//         maintainAspectRatio: false,
//         plugins: {
//           legend: {
//             align: "end",
//             position: "bottom",
//             labels: {
//               color: "white",
//             },
//           },
//           title: {
//             display: false,
//           },
//           tooltip: {
//             mode: "index",
//             intersect: false,
//           },
//         },
//         interaction: {
//           mode: "nearest",
//           intersect: true,
//         },
//         scales: {
//           x: {
//             ticks: {
//               color: "rgba(255,255,255,.7)",
//             },
//             grid: {
//               display: false,
//             },
//           },
//           y: {
//             ticks: {
//               color: "rgba(255,255,255,.7)",
//             },
//             grid: {
//               color: "rgba(255, 255, 255, 0.15)",
//             },
//           },
//         },
//       },
//     };

//     const ctx = document.getElementById("line-chart").getContext("2d");
//     new Chart(ctx, config);
//   }, []);

//   return (
//     <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-slate-700">
//       <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
//         <div className="flex flex-wrap items-center">
//           <div className="relative  text-white w-full max-w-full flex-grow flex-1">
//             <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">Overview</h6>
//             <h2 className="text-white text-xl font-semibold">Income</h2>
//           </div>
//         </div>
//       </div>
//       <div className="p-4 flex-auto">
//         <div className="relative h-[350px]">
//           <canvas id="line-chart"></canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CardLineChart;
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
};

const CardLineChart = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. Ali");
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const renderChart = () => {
    const ctx = chartRef.current.getContext("2d");

    const config = {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: selectedDoctor,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: doctorData[selectedDoctor],
            fill: false,
          },
        ],
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
          title: {
            display: false,
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

    // Destroy previous chart if exists
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
            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">Overview</h6>
            <h2 className="text-white text-xl font-semibold">Income</h2>
          </div>
          <div className="text-right">
            <select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="text-sm px-3 py-1 rounded bg-white text-black outline-none"
            >
              {Object.keys(doctorData).map((doctor) => (
                <option key={doctor} value={doctor}>
                  {doctor}
                </option>
              ))}
            </select>
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
