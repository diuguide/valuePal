import Chart from "react-apexcharts";

const ChartWrapper = ({ chartData }) => {
  console.log(chartData);
  const chart = {
    series: [
      {
        name: "Desktops",
        data: chartData.current,
      },
    ],
    options: {
      chart: {
        width: "250px",
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          
        ],
      },
    },
  };

  return <Chart options={chart.options} series={chart.series} />;
};
export default ChartWrapper;
