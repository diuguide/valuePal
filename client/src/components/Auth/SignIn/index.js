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
          <Row className="d-flex justify-content-center align-content-center ">
            <Col className="bg-light border border-rounded" xs={10} md={10} lg={10}>
              <div className="signupDesc">
                <p>
                  Welcome to ValuePal, a stock information and analysis tool. If
                  you do not have an account please click{" "}
                  <span>create account</span> to create an account, and then
                  login here. If you would like to demo the site sign in with
                  Username: Temp@valuePal.com and the password: password to see
                  the layout and try out some of the features. The API we use is
                  limited to only 1 search per minute so please be gentle with
                  the webiste. Please reach out to me at{" "}
                  <span>everett.diuguid@gmail.com</span> if you have any
                  questions. If you would like to contribute to the project you
                  can find the repository{" "}
                  <a href="https://github.com/diuguide/valuePal">here.</a>{" "}
                  Thanks for stopping by, we hope you enjoy the site!
                </p>
              </div>
            </Col>
          </Row>

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
                <Button
                  onClick={handleSubmit}
                  variant="primary"
                  type="submit"
                  block
                >
                  {auth.isLoading ? <Loader /> : <div>Login</div>}
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
