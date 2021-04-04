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
            <Row>
              <Col>
                <Row>
                  <Col>
                    <div className="open info">
                      Open: {stockData.quoteInfo.open}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="fiftytwo info">
                      52 Wk Range: {stockData.stockInfo.ytd.high}-
                      {stockData.stockInfo.ytd.low}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="outstanding info">
                      Shares Outstanding: {stockData.stockInfo.outstanding}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="marketcap info">
                      Market Cap: {stockData.stockInfo.marketCap}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col>
                    <div className="eps info">
                      EPS: {stockData.stockInfo.eps}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="beta info">
                      Beta: {stockData.stockInfo.beta}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="psRatio info">
                      PS Ratio: {stockData.stockInfo.psRatio}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="pbRatio info">
                      PB Ratio: {stockData.stockInfo.pbRatio}
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
