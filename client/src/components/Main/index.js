import { Container, Row, Col } from 'react-bootstrap';
import NavBar from "./NavBar";

const Main = () => {
    return (
        <>
        <NavBar />
        <Container fluid>
                <Row className="bg-secondary" style={{ height: "100vh" }}>
                    <Col>
                    
                    </Col>
            </Row>

            </Container>
        </>    
    )
}
export default Main;