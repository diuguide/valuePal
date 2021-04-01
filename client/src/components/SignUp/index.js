import { Form, Button } from "react-bootstrap";

const SignUp = () => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Re-Enter Password" />
      </Form.Group>
      <Button variant="warning" type="submit" block>
        Create
      </Button>
    </Form>
  );
};

export default SignUp;
