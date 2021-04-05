import { Row, Col, Button } from 'react-bootstrap';
import Loader from "../../Loader";
import { useSelector } from "react-redux";
import { authState } from "../../../features/auth/authSlice";
import { stockDataState } from "../../../features/stockData/stockDataSlice";
import axios from 'axios';

const ControlPanel = () => {
    const auth = useSelector(authState);
    const stockData = useSelector(stockDataState);

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
      <Row className="bg-light d-flex justify-content-center p-3">
        <Col>
          <Button
            onClick={handleSubmit}
            variant="secondary"
            type="submit"
            
          >
            {auth.isLoading ? <Loader /> : <div>Add to Watch List</div>}
          </Button>
        </Col>
      </Row>
    );
}

export default ControlPanel;