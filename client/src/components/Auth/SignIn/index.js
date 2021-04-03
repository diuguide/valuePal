import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import Loader from "../../Loader";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { isLoading, loggedIn, loggedOut, authState } from "../../../features/auth/authSlice";
import { loginFailed, errorState, clearErrors } from "../../../features/error/errorSlice";


const SignIn = () => {
  const history = useHistory();

  const auth = useSelector(authState);
  const error = useSelector(errorState);

  const dispatch = useDispatch();
  
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
    dispatch(isLoading());
    axios.post(`/api/login`, loginCreds).then(res => {
      console.log(res);
      if (res.data.code === 200) {
        dispatch(loggedIn(loginCreds.username))
        dispatch(clearErrors());
        history.push('/Main');
      } else if (res.data.code === 400) {
        dispatch(loginFailed());
        dispatch(loggedOut());
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
                   {auth.isLoading ? (
                    <Loader />
                  ) : <div>Login</div>}
                </Button>
                <Alert show={error.show} variant="danger" className="mt-3">
                  <Alert>{error.msg}</Alert>
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
