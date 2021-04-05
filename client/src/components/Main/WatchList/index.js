import { Row, Col, Table } from "react-bootstrap";
import axios from "axios";
import { authState } from "../../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { stockDataState } from "../../../features/stockData/stockDataSlice";

const WatchList = () => {
  const [listData, setListData] = useState();
  const auth = useSelector(authState);
  const stockData = useSelector(stockDataState);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios.post("watch/getList", { username: auth.username }).then((res) => {
      console.log("response inside: watchlist", res);
      setListData(res.data);
    });
  };

  return (
    <>
      {stockData.dataLoaded && (
        <Row className="bg-light">
          <Col>
            <Row>
              <Col className="d-flex justify-content-center">
                <div className="tableTitle">My Watchlist</div>
              </Col>
            </Row>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Company</th>
                  <th>Last Price</th>
                  <th>% Change</th>
                </tr>
              </thead>
              <tbody>
                {listData.map((data, i) => {
                  console.log("map", data);
                  return (
                    <tr key={i}>
                      <td>{data.symbol}</td>
                      <td>{data.name}</td>
                      <td>{data.last}</td>
                      <td>{data.change}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </>
  );
};

export default WatchList;
