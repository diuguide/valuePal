import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import Loader from "../../Loader";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const SignIn = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const [loginCreds, setLoginCreds] = useState({
    username: '',
    password: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({ ...loginCreds, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setShowError(false);
    axios.post(`/api/login`, loginCreds).then(res => {
      console.log(res);
      if (res.data.code === 200) {
        setError('Success!');
        setShowError(true);
        history.push('/Main');
      } else if (res.data.code === 400) {
        setError('Login failure, please check your credentials and try again.');
        setShowError(true);
        setIsLoading(false);
      }
    });
  }

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
                    value={loginCreds.username}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    id="password"
                    name="password"
                    value={loginCreds.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" type="submit" block>
                   {isLoading ? (
                    <Loader />
                  ) : <div>Login</div>}
                </Button>
                <Alert show={showError} variant="danger" className="mt-3">
                  <Alert>{error}</Alert>
                </Alert>
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
