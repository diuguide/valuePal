import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  return (
    <Container fluid>
      <Row
        className="bg-secondary d-flex justify-content-center align-content-center"
        style={{ height: "100vh" }}
      >
        <Col>
          <Row className="d-flex justify-content-center align-content-center">
            <Col
              xs={10}
              md={5}
              lg={4}
              className="m-2 bg-dark p-4"
              style={{ height: "250px" }}
            >
              <SignIn />
            </Col>
            <Col
              xs={10}
              md={5}
              lg={4}
              className="m-2 bg-dark p-4"
              style={{ height: "250px" }}
            >
              <SignUp />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
