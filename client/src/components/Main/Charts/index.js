import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Loading from "../../Loader";
import Chart from "react-apexcharts";

const ChartComponent = () => {
  const [chart, setChart] = useState({
    options: {
      chart: {
        background: "#03071e",
        foreColor: "#70e000",
      },
      xaxis: {
        categories: [],
        labels: {
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
        data: [1,2,3,4,5,6],
      },
    ],
  });
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={9} md={6} lg={4}>
          <Chart
            options={chart.options}
            series={chart.series}
            type="line"
            width="100%"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ChartComponent;
