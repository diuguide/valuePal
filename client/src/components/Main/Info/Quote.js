import { Row, Col } from "react-bootstrap";
import Loader from "../../Loader";
import { stockDataState } from "../../../features/stockData/stockDataSlice";
import { useSelector } from "react-redux";

const StockQuote = () => {
  const stockData = useSelector(stockDataState);
  return (
    <Row className="d-flex">
      <Col>
        {stockData.dataLoaded && (
          <>
            <Row>
              <Col>
                <div className="name quote">{stockData.stockInfo.name}</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="tradedOn quote">
                  {stockData.stockInfo.tradedOn}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="price quote">${stockData.quoteInfo.price}</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="changePer quote">
                  {stockData.quoteInfo.changePer}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="date quote">{stockData.quoteInfo.date}</div>
              </Col>
            </Row>
          </>
        )}
        {stockData.dataLoading && <Loader />}
      </Col>
    </Row>
  );
};

export default StockQuote;
