import { Container, Row, Col } from 'react-bootstrap';
import NavBar from "./NavBar";
import ChartComponent from './Charts';

const Main = () => {
    
    return (
        <>
        <NavBar />
        <Container fluid>
                <Row className="bg-secondary" style={{ height: "100vh" }}>
                    <Col>
                        <Row className="d-flex justify-content-center">
                            <Col>
                                <ChartComponent />
                            </Col>
                        </Row>
                    </Col>
            </Row>

            </Container>
        </>    
    )
}
export default Main;