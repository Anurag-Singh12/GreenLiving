import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts'; // keep this

const EV = () => {
  useEffect(() => {
    const chartConfig = {
      series: [
        {
          name: "% of EV sales",
          data: [7, 7.2, 7.5, 8, 8.2, 8.5, 8.8, 9, 9.3, 9.5, 9.7, 10],
        },
      ],
      chart: {
        type: "bar",
        height: 240,
        width: 1000,
        toolbar: { show: false },
      },
      dataLabels: { enabled: false },
      colors: ["#026e24"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 2,
        },
      },
      xaxis: {
        categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      },
    };

    const chart = new ApexCharts(
      document.querySelector("#bar-chart"),
      chartConfig
    );

    chart.render();

    return () => chart.destroy();
  }, []);

  return (
    <div>
      <div id="bar-chart"></div>
    </div>
  );
};

export default EV;