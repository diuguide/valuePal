import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import SignIn from "./components/SignIn";
import './App.css';

function App() {
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-content-center" style={{ height: "375px"}}>
        <Col xs={10} md={5} lg={4} className="border p-4">
        <SignIn />
        </Col>
      </Row>
      
    </Container>
  );
}

export default App;
