import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loggedOut } from "../../../features/auth/authSlice";
import { clearErrors } from "../../../features/error/errorSlice";
import { getDaily, getInfo, getQuote } from "../../../utilities/stockdata";
import {
  dataLoaded,
  dataLoading,
  dataSet,
  dataSetInfo,
  dataSetQuote,
} from "../../../features/stockData/stockDataSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ticker, setTicker] = useState({ symbol: "" });
  const [waitMinute, setWaitMinute] = useState(false);

  const waitOneMinute = () => {
    setWaitMinute(true);
    setTimeout(function () {
      setWaitMinute(false);
    }, 60000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTicker({ ...ticker, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    waitOneMinute();
    dispatch(dataLoading());

    getInfo(ticker.symbol).then((res) => {
      dispatch(dataSetInfo({ stockInfo: res }));

      return getQuote(ticker.symbol).then((res) => {
        dispatch(dataSetQuote({ quoteInfo: res }));

        return getDaily(ticker.symbol, 30).then((res) => {
          setTicker({ symbol: "" });
          dispatch(dataLoaded());
          dispatch(
            dataSet({
              dates: res.dates,
              values: res.values,
              ticker: ticker.symbol.toUpperCase(),
            })
          );
        });
      });
    });
  };

  const handleLogout = () => {
    dispatch(loggedOut());
    dispatch(clearErrors());
    history.push("/");
  };
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className="text-success">ValuePal</Navbar.Brand>
      <Navbar.Toggle className="bg-light" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-light" onClick={handleLogout}>
            Logout
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            id="symbol"
            name="symbol"
            value={ticker.symbol}
            onChange={handleChange}
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button
            disabled={waitMinute}
            onClick={handleClick}
            variant="outline-success"
          >
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
