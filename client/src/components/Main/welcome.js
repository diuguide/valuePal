import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./NavBar";

import { useSelector } from "react-redux";
import { authState } from "../../features/auth/authSlice";

const Main = () => {
  const auth = useSelector(authState);
  if (auth.isAuthenticated) {
    return (
      <>
          <Row className="d-flex justify-content-center">
            <Col className="bg-light p-3" lg={8}>
              <Row>
                <Col>
                  <div className="welcome">
                    <p>
                      Welcome to ValuePal, a stock analysis tool gathering data
                      from{" "}
                      <a href="https://www.alphavantage.co/">
                        https://www.alphavantage.co/
                      </a>
                    </p>
                  </div>
                  <div className="instructions">
                    <p>
                      You are already signed in so to use the site simply enter
                      a ticker symbol in the search bar at the top right and the
                      data will populate to the screen. More features will be on
                      the way, but for now the following options are available
                      to you:
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="featurelist">
                    <ul>
                      <li>Company Info</li>
                      <li>Price/Price Range Info</li>
                      <li>Market Cap</li>
                      <li>Outstanding Shares</li>
                      <li>Book Value</li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="featurelist">
                    <ul>
                      <li>Earnings per Share</li>
                      <li>Price/Sales Ratio</li>
                      <li>Price/Book Ratio</li>
                      <li>Beta</li>
                      <li>Adding a stock to your watch list</li>
                    </ul>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="helpnotice">
                    <p>
                      There is currently a limit on the usage of our API so be
                      gentle! Please do not search more than once in a minute.
                      If you see any other bugs feel free to reach out to me at
                      everett.diuguid@gmail.com. The Github repository can be
                      found{" "}
                      <a href="https://github.com/diuguide/valuePal">here.</a>
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <Container fluid>
          <Row className="bg-secondary" style={{ height: "100vh" }}>
            <Col className="d-flex justify-content-center align-content-center">
              <h1>Please log in to view this content</h1>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};
export default Main;
