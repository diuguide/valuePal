import { Row, Col, Table } from "react-bootstrap";

const WatchList = () => {
  return (
    <Row>
      <Col>
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
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default WatchList;
