import { Container, Row, Col } from "react-bootstrap";
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
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={9} md={6} lg={4}>
          {stockData.dataLoaded && (
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="line"
              width="100%"
            />
          )}
          {stockData.dataLoading && <Loader />}
        </Col>
        <Col xs={9} md={6} lg={4}>
          {stockData.dataLoading && <Loader />}
        </Col>
      </Row>
    </Container>
  );
};

export default ChartComponent;
