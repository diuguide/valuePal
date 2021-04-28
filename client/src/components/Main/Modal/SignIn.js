import { Modal } from "react-bootstrap";
import SignIn from "../../Auth/SignIn";

const SignInModal = ({ showSignIn, setShowSignIn }) => {
  const handleClose = () => setShowSignIn(false);

  return (
    <Modal show={showSignIn} onHide={handleClose}>
          <SignIn handleClose={handleClose} />
    </Modal>
  );
};

export default SignInModal;
