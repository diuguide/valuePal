import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";
import { useSelector, useDispatch } from "react-redux";
import { authState } from "../../features/auth/authSlice";
import ChartComponent from "./Charts";

const Main = () => {
    const auth = useSelector(authState);

    if (auth.isAuthenticated) {
        return (
    <>
      <NavBar />
      <Container fluid>
        <Row className="bg-secondary" style={{ height: "100vh" }}>
          <Col>
            <Row className="d-flex justify-content-center">
              <Col>{/* <ChartComponent /> */}</Col>
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
                    <Col><h1>Please log in to view this content</h1></Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </>
        );
    }
  
};
export default Main;
