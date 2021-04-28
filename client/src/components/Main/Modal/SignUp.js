import { Modal } from "react-bootstrap";
import SignUp from "../../Auth/SignUp";

const SignUpModal = ({ showSignUp, setShowSignUp }) => {
  const handleClose = () => setShowSignUp(false);
  return (
    <Modal show={showSignUp} onHide={handleClose}>
      <SignUp handleClose={handleClose} />
    </Modal>
  );
};

export default SignUpModal;
