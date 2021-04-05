import { Row, Col } from "react-bootstrap";
import Loader from "../../Loader";
import { stockDataState } from "../../../features/stockData/stockDataSlice";
import { useSelector } from "react-redux";

const StockQuote = () => {
  const stockData = useSelector(stockDataState);
  return (
    <Row className="d-flex bg-light">
      <Col>
        {stockData.dataLoaded && (
          <>
            <Row>
              <Col>
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
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div className="price quote">
                      ${stockData.quoteInfo.price}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="changePer quote">
                      <span>Change: </span>
                      {stockData.quoteInfo.changePer}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        )}
        {stockData.dataLoading && (
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <Loader />
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default StockQuote;
