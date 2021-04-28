import { Modal } from "react-bootstrap";
import SignIn from "../../Auth/SignIn";

const SignInModal = ({ showSignIn, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <Modal show={showSignIn} onHide={handleClose}>
      <SignIn />
    </Modal>
  );
};

export default SignInModal;
