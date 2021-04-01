import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import Loader from "../../Loader";

const SignUp = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState('')
  const [accountCreds, setAccountCreds] = useState({
    username: "",
    password: "",
    passwordCheck: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountCreds({ ...accountCreds, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setShow(false);
    if (accountCreds.password === accountCreds.passwordCheck) {
      setIsLoading(true);
      axios.post('/api/add', accountCreds).then(res => {
        console.log(res)
        history.push('/');
      });
    } else {
      setError('Passwords do not match');
      setShow(true);
    }
  };
  return (
    <Container fluid>
      <Row
        className="bg-secondary d-flex justify-content-center align-content-center"
        style={{ height: "100vh" }}
      >
        <Col>
          <Row className="d-flex justify-content-center align-content-center">
            <Col xs={10} md={5} lg={4} className="m-2 bg-dark p-4">
              <Form>
                <Form.Group>
                  <Form.Control
                    type="email"
                    id="username"
                    name="username"
                    value={accountCreds.username}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    id="password"
                    name="password"
                    value={accountCreds.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    id="passwordCheck"
                    name="passwordCheck"
                    value={accountCreds.passwordCheck}
                    onChange={handleChange}
                    placeholder="Re-enter Password"
                  />
                </Form.Group>
                <Button
                  onClick={handleSubmit}
                  variant="warning"
                  type="submit"
                  block
                >
                  {isLoading ? (
                    <Loader />
                  ) : <div>Create</div>}
                </Button>
                <Alert show={show} variant="danger" className="mt-3">
                  <Alert>{error}</Alert>
                </Alert>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default SignUp;
