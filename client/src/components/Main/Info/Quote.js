import { Row, Col } from "react-bootstrap";
import Loader from "../../Loader";
import { stockDataState } from "../../../features/stockData/stockDataSlice";
import { useSelector } from "react-redux";

const StockQuote = () => {
  const stockData = useSelector(stockDataState);
  return (
    
      <Row className="d-flex justify-content-center">
        <Col xs={9} md={6} lg={4}>
              {stockData.dataLoaded && <h1>{stockData.quoteInfo.price}</h1>}
          {stockData.dataLoading && <Loader />}
        </Col>
      </Row>
    
  );
};

export default StockQuote;
