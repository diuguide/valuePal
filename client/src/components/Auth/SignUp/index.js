import { Form, Button, Col, Row, Container } from "react-bootstrap";

const SignUp = () => {
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
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Re-Enter Password"
                  />
                </Form.Group>
                <Button variant="warning" type="submit" block>
                  Create
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default SignUp;
