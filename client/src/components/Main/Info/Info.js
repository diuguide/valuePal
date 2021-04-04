import { Col, Row } from "react-bootstrap";
import Loader from "../../Loader";
import { stockDataState } from "../../../features/stockData/stockDataSlice";
import { useSelector } from "react-redux";

const StockInfo = () => {
  const stockData = useSelector(stockDataState);
  return (
    <Row className="d-flex">
      <Col>
        {stockData.dataLoaded && (
          <>
            <Row className="pb-3">
              <Col>
                <Row>
                  <Col>
                    <div className="open info">
                      <span>Open: </span>
                      {stockData.quoteInfo.open}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="fiftytwo info">
                      <span>52 Wk Range: </span>
                      <div>
                        ${stockData.stockInfo.ytd.high} - $
                        {stockData.stockInfo.ytd.low}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="outstanding info">
                      <span>Shares Outstanding:</span>{" "}
                      {stockData.stockInfo.outstanding}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="marketcap info">
                      <span>Market Cap: </span>${stockData.stockInfo.marketCap}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div className="eps info">
                      <span>EPS: </span> {stockData.stockInfo.eps}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="beta info">
                      <span>Beta: </span>
                      {stockData.stockInfo.beta}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="psRatio info">
                      <span>P/S Ratio: </span>
                      {stockData.stockInfo.psRatio}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="pbRatio info">
                      <span>P/B Ratio: </span>
                      {stockData.stockInfo.pbRatio}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        )}
        {stockData.dataLoading && <Loader />}
      </Col>
    </Row>
  );
};

export default StockInfo;
