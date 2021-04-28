import { Modal } from "react-bootstrap";
import SignUp from "../../Auth/SignUp";

const SignUpModal = ({ showSignUp }) => {
  return (
    <Modal show={showSignUp}>
      <SignUp />
    </Modal>
  );
};

export default SignUpModal;
