import { Container, Row, Col } from "react-bootstrap";
import Loader from "../../Loader";

const StockQuote = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col xs={9} md={6} lg={4}>
          {stockData.dataLoaded && <h1>test</h1>}
          {stockData.dataLoading && <Loader />}
        </Col>
      </Row>
    </Container>
  );
};

export default StockQuote;
