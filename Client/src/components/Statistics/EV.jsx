import React, { useEffect } from "react";
import Chart from "react-apexcharts";

const EV = () => {
  const options = {
    chart: {
      type: "bar",
      height: 240,
      toolbar: { show: false },
      responsive: true,
    },
    dataLabels: { enabled: false },
    colors: ["#026e24"],
    plotOptions: { bar: { columnWidth: "40%", borderRadius: 2 } },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: { style: { colors: "#035b23", fontSize: "12px" } },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { labels: { style: { colors: "#04501c", fontSize: "12px" } } },
    grid: {
      borderColor: "#11c134",
      strokeDashArray: 5,
      xaxis: { lines: { show: true } },
      padding: { top: 5, right: 20 },
    },
    fill: { opacity: 0.8 },
    tooltip: { theme: "dark" },
  };

  const series = [
    {
      name: "% of EV sales",
      data: [7, 7.2, 7.5, 8, 8.2, 8.5, 8.8, 9, 9.3, 9.5, 9.7, 10],
    },
  ];

  return (
    <div className="relative flex flex-col rounded-xl bg-linear-to-r from-slate-100 to-slate-200 text-gray-700 shadow-2xl m-3 p-4">
      <h6 className="text-green-800 text-xl font-semibold mb-2">
        EV Sales for Year 2023
      </h6>
      <Chart
        options={options}
        series={series}
        type="bar"
        height={240}
        width="100%"
      />
    </div>
  );
};

export default EV;

// import React, { useEffect } from 'react';
// import ApexCharts from 'apexcharts'; // keep this

// const EV = () => {
//   useEffect(() => {
//     const chartConfig = {
//       series: [
//         {
//           name: "% of EV sales",
//           data: [7, 7.2, 7.5, 8, 8.2, 8.5, 8.8, 9, 9.3, 9.5, 9.7, 10],
//         },
//       ],
//       chart: {
//         type: "bar",
//         height: 240,
//         width: 1000,
//         toolbar: { show: false },
//       },
//       dataLabels: { enabled: false },
//       colors: ["#026e24"],
//       plotOptions: {
//         bar: {
//           columnWidth: "40%",
//           borderRadius: 2,
//         },
//       },
//       xaxis: {
//         categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
//       },
//     };

//     const chart = new ApexCharts(
//       document.querySelector("#bar-chart"),
//       chartConfig
//     );

//     chart.render();

//     return () => chart.destroy();
//   }, []);

//   return (
//     <div>
//       <div id="bar-chart"></div>
//     </div>
//   );
// };

// export default EV;
