import { Button, Modal } from "react-bootstrap";
import SignIn from '../../Auth/SignIn';
import SignUp from '../../Auth/SignUp';

const AuthModal = ({ handleShow, show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;
