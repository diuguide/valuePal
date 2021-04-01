import { Form, Button, Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const SignIn = () => {
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
                <Button variant="primary" type="submit" block>
                  Login
                </Button>
                <Link to="/SignUp" className="btn-warning createAccount">
                  Create Account
                </Link>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default SignIn;
