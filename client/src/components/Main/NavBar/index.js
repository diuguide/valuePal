import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const NavBar = () => {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className="text-success">ValuePal</Navbar.Brand>
        <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="text-light" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="#link">
              Link
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
}
export default NavBar;