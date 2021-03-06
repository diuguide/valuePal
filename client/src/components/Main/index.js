import { Alert, Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import StockQuote from "./Info/Quote";
import StockInfo from "./Info/Info";
import WatchList from "./WatchList";
import Welcome from "./welcome";
import { useSelector } from "react-redux";
import { authState } from "../../features/auth/authSlice";
import { errorState } from "../../features/error/errorSlice";
import ChartComponent from "./Charts";

const Main = () => {
  const auth = useSelector(authState);
  const error = useSelector(errorState);
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row className="bg-secondary d-flex justify-content-center">
          <Col lg={8}>
            <Row>
              <Col>
                <Alert style={{ height: "50px" }} show={error.show} variant="danger" className="mt-3">
                  {error.msg}
                </Alert>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <StockQuote />
                <ChartComponent />
              </Col>
              <Col lg={6}>
                <StockInfo />
                <WatchList />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="bg-secondary d-flex justify-content-center">
          <Col>{!auth.isAuthenticated && <Welcome />}</Col>
        </Row>
      </Container>
    </>
  );
};
export default Main;
