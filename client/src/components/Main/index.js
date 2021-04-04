import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import StockQuote from "./Info/Quote";
import StockInfo from "./Info/Info";
import { useSelector } from "react-redux";
import { authState } from "../../features/auth/authSlice";
import ChartComponent from "./Charts";

const Main = () => {
  const auth = useSelector(authState);
  if (auth.isAuthenticated) {
    return (
      <>
        <NavBar />
        <Container fluid>
          
          <Row className="bg-secondary d-flex justify-content-center">
            <Col lg={8}>
              <Row className="bg-light m-3 p-2">
                <Col lg={5} >
                  <StockQuote />
                </Col>
                <Col>
                  <StockInfo />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="bg-secondary d-flex justify-content-center">
            <Col lg={8}>
              <ChartComponent />
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
