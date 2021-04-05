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

const ControlPanel = () => {
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
    <>
      {stockData.dataLoaded && (
        <Row className="bg-light d-flex justify-content-center p-3">
          <Col>
            <Button onClick={handleSubmit} variant="secondary" type="submit">
              {stockData.watchListLoading ? (
                <Row>
                  <Col className="d-flex justify-content-center align-items-center">
                    <Loader />
                  </Col>
                </Row>
              ) : (
                <div>Add to Watch List</div>
              )}
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ControlPanel;
