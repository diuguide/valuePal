import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loggedOut } from "../../../features/auth/authSlice";
import { clearErrors } from "../../../features/error/errorSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(loggedOut());
    dispatch(clearErrors());
    history.push("/");
  };
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className="text-success">ValuePal</Navbar.Brand>
      <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-light" onClick={handleLogout}>
            Logout
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
