import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import Loader from "../../Loader";
import Chart from "react-apexcharts";
import { stockDataState } from "../../../features/stockData/stockDataSlice";
import { useSelector } from "react-redux";

const ChartComponent = () => {
  const stockData = useSelector(stockDataState);

  const [chartData, setChartData] = useState({});

  useEffect(() => {
    createChart();
  }, [stockData]);

  const createChart = () => {
    setChartData({
      options: {
        chart: {
          background: "#03071e",
          width: 250
        },
        colors: ["#70e000"],
        grid: {
          show: true,
          borderColor: "#8d99ae",
          position: "back",
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        xaxis: {
          categories: [],
          labels: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
        stroke: {
          curve: "smooth",
          width: 1,
        },
      },
      series: [
        {
          name: "series-1",
          data: stockData.values,
        },
      ],
    });
  };

  return (
    <Row className="d-flex p-2">
      <Col>
        {stockData.dataLoaded && (
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="line"
            width="100%"
          />
        )}
        {stockData.dataLoading && (
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <Loader />
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default ChartComponent;
