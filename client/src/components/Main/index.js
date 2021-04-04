import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import StockQuote from "./Info/Quote";
import StockInfo from "./Info/Info";
import { useSelector } from "react-redux";
import { authState } from "../../features/auth/authSlice";
import ChartComponent from "./Charts";
import { useState } from "react";

const Main = () => {
  const auth = useSelector(authState);
  const [updateChart, setUpdateChart] = useState(false);
  if (auth.isAuthenticated) {
    return (
      <>
        <NavBar updateChart={updateChart} setUpdateChart={setUpdateChart} />
        <Container fluid>
          <Row className="bg-secondary" style={{ height: "100vh" }}>
            <Col>
              <Row className="d-flex justify-content-center">
                <Col>
                  <ChartComponent />
                </Col>
                <Col>
                  <StockInfo />
                </Col>
                <Col>
                  <StockQuote />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <Container fluid>
          <Row className="bg-secondary" style={{ height: "100vh" }}>
            <Col>
              <Row className="d-flex justify-content-center align-content-center">
                <Col>
                  <h1>Please log in to view this content</h1>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};
export default Main;
