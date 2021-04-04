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
    <Container>
      <Row className="d-flex justify-content-left">
        <Col xs={12} md={8} lg={5}>
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
      </Row>
    </Container>
  );
};

export default ChartComponent;
