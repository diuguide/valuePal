import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import StockQuote from "./Info/Quote";
import StockInfo from "./Info/Info";
import ControlPanel from './ControlPanel';
import WatchList from './WatchList';
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
              <Row>
                <Col lg={6}>
                  <StockQuote />
                  <ControlPanel />
                  <ChartComponent />
                </Col>
                <Col lg={6}>
                  <StockInfo />
                  <WatchList />
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
            <Col className="d-flex justify-content-center align-content-center">
              <h1>Please log in to view this content</h1>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};
export default Main;
