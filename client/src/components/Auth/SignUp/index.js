import { Form, Button, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Loader from "../../Loader";
import {
  usernameTaken,
  errorState,
  clearErrors,
  passwordFailed,
} from "../../../features/error/errorSlice";
import {
  isLoading,
  isLoaded,
  authState,
} from "../../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const history = useHistory();

  const auth = useSelector(authState);
  const error = useSelector(errorState);

  const dispatch = useDispatch();

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

    dispatch(isLoading());
    dispatch(clearErrors());

    if (accountCreds.password === accountCreds.passwordCheck) {
      axios.post("/api/add", accountCreds).then((res) => {
        if (res.data.code === 300) {
          dispatch(isLoaded());
          dispatch(usernameTaken());
        } else if (res.data.code === 200) {
          dispatch(clearErrors());
          dispatch(isLoaded());
          history.push("/");
        }
      });
    } else {
      dispatch(passwordFailed());
      dispatch(isLoaded());
    }
  };
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-content-center">
        <Col>
          <Row className="d-flex justify-content-center align-content-center">
            <Col className="bg-dark p-4">
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
                  {auth.isLoading ? <Loader /> : <div>Create</div>}
                </Button>
                <Alert show={error.show} variant="danger" className="mt-3">
                  <Alert>{error.msg}</Alert>
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
