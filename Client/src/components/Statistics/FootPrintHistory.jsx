import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const FootPrintHistory = ({ graphData }) => {
  const [chartData, setChartData] = useState({ series: [], categories: [] });

  useEffect(() => {
    if (graphData && graphData.length > 0) {
      setChartData({
        series: [
          {
            name: "Carbon Footprint (metric Tons CO2)",
            data: graphData.map((i) => i.estimatedCarbonFootprint),
          },
        ],
        categories: graphData.map((i) =>
          new Date(i.updatedAt).toLocaleDateString(),
        ),
      });
    }
  }, [graphData]);

  const options = {
    chart: { type: "line", height: 200, toolbar: { show: false } },
    dataLabels: { enabled: false },
    colors: ["#00a110"],
    stroke: { width: 3, curve: "smooth", dashArray: [4, 4] },
    xaxis: {
      categories: chartData.categories,
      labels: { style: { colors: "#004909", fontSize: "12px" } },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { labels: { style: { colors: "#004a1f", fontSize: "12px" } } },
    grid: {
      borderColor: "#00eb27",
      strokeDashArray: 5,
      xaxis: { lines: { show: true } },
      padding: { top: 5, right: 20 },
    },
    fill: { opacity: 0.8 },
    tooltip: { theme: "dark" },
  };

  return (
    <div className="w-full sm:w-[60%] relative flex flex-col rounded-xl bg-linear-to-r from-slate-100 to-slate-200 text-gray-700 shadow-2xl m-2 p-4">
      <h6 className="text-green-800 text-xl font-semibold mb-2">
        Your previous record
      </h6>
      <Chart
        options={options}
        series={chartData.series}
        type="line"
        height={200}
        width="100%"
      />
    </div>
  );
};

export default FootPrintHistory;

// import React, { useState, useEffect } from 'react';
// import ApexCharts from 'apexcharts';
// import Chart from 'react-apexcharts';

// const FootPrintHistory = (props) => {
//     const { graphData } = props;

//     const [chartData, setChartData] = useState({
//         series: [],
//         categories: [],
//     });

//     useEffect(() => {
//         if (graphData && graphData.length > 0) {
//             const array = graphData.map(item => item.estimatedCarbonFootprint);
//             const timeArray = graphData.map(item => new Date(item.updatedAt).toLocaleDateString()); // Convert to a readable date format

//             setChartData({
//                 series: [
//                     {
//                         name: "Carbon Footprint (metric Tons CO2)",
//                         data: array,
//                     },
//                 ],
//                 categories: timeArray,
//             });
//         }
//     }, [graphData]);

//     return (
//         <div className="z-0 sm:w-[60%] relative flex flex-col rounded-xl bg-gradient-to-r from-slate-100 to-slate-200 bg-clip-border text-gray-700 shadow-2xl m-2">
//             <div className="relative mx-4 mt-4 flex flex-col gap-4 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none md:flex-row md:items-center">
//                 <div>
//                     <h6 className="block text-green-800 font-sans text-2xl font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
//                         Your previous record
//                     </h6>
//                 </div>
//             </div>
//             <div className="z-10 pt-2 px-2 pb-0">
//                 <Chart
//                     options={{
//                         chart: {
//                             type: "line", // Change to "line" for line chart
//                             height: 120,
//                             width: 1000,
//                             toolbar: {
//                                 show: false,
//                             },
//                         },
//                         title: {
//                             text: '', // Empty string for no title
//                         },
//                         dataLabels: {
//                             enabled: false,
//                         },
//                         colors: ["#00a110"],
//                         plotOptions: {
//                             line: {
//                                 curve: 'smooth', // Optional: to smoothen the line
//                             },
//                         },
//                         stroke: {
//                             width: 3,
//                             curve: 'smooth',
//                             dashArray: [4, 4], // Make the line dotted
//                         },
//                         xaxis: {
//                             axisTicks: {
//                                 show: false,
//                             },
//                             axisBorder: {
//                                 show: false,
//                             },
//                             labels: {
//                                 style: {
//                                     colors: "#004909",
//                                     fontSize: "12px",
//                                     fontFamily: "inherit",
//                                     fontWeight: 400,
//                                 },
//                             },
//                             categories: chartData.categories,
//                         },
//                         yaxis: {
//                             labels: {
//                                 style: {
//                                     colors: "#004a1f",
//                                     fontSize: "12px",
//                                     fontFamily: "inherit",
//                                     fontWeight: 400,
//                                 },
//                             },
//                         },
//                         grid: {
//                             show: true,
//                             borderColor: "#00eb27",
//                             strokeDashArray: 5,
//                             xaxis: {
//                                 lines: {
//                                     show: true,
//                                 },
//                             },
//                             padding: {
//                                 top: 5,
//                                 right: 20,
//                             },
//                         },
//                         fill: {
//                             opacity: 0.8,
//                         },
//                         tooltip: {
//                             theme: "dark",
//                         },
//                     }}
//                     series={chartData.series}
//                 />
//             </div>
//         </div>
//     );
// };

// export default FootPrintHistory;
