import { Row, Col, Button } from "react-bootstrap";
import Loader from "../../Loader";
import { useSelector, useDispatch } from "react-redux";
import { authState } from "../../../features/auth/authSlice";
import {
  stockDataState,
  watchListLoaded,
  watchListLoading,
} from "../../../features/stockData/stockDataSlice";
import axios from "axios";

const StockQuote = () => {
  const auth = useSelector(authState);
  const stockData = useSelector(stockDataState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(watchListLoading());
    let watchListData = {
      symbol: stockData.ticker,
      nameCo: stockData.stockInfo.name,
      lastPrice: stockData.quoteInfo.price,
      changePer: stockData.quoteInfo.changePer,
      username: auth.username,
    };

    axios
      .post("watch/add", watchListData)
      .then((res) => {
        dispatch(watchListLoaded());
      })
      .catch((err) => console.log(err));
  };
  return (
    <Row>
      <Col>
        {stockData.dataLoaded && (
          <>
            <Row  className="d-flex bg-light p-1 m-1">
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
                {stockData.dataLoaded && (
                  <Row className="bg-light d-flex justify-content-center p-3">
                    <Col>
                      <Button
                        onClick={handleSubmit}
                        variant="secondary"
                        type="submit"
                      >
                        {stockData.watchListLoading ? (
                          <Row>
                            <Col className="d-flex justify-content-center align-items-center">
                              <Loader />
                            </Col>
                          </Row>
                        ) : (
                          <div>Watch</div>
                        )}
                      </Button>
                    </Col>
                  </Row>
                )}
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
