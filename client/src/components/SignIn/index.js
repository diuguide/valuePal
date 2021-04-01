import { Form, Button } from "react-bootstrap";

const SignIn = () => {
  return (
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
      <Button variant="warning" type="submit" block>
        Create Account
      </Button>
    </Form>
  );
};
export default SignIn;
