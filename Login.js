import { useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  Form,
  FormFloating,
  FormLabel,
  FormControl,
  FormGroup,
  Button,
} from "react-bootstrap";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { rdx_loggedin, rdx_show_login_model,rdx_hideLoginModel} from '../redux/userReducer'

export default function Login() {
  const [name, setName] = useState("");
 
  const dispatch = useDispatch();

  const {loggedin, showLoginModel} = useSelector(state=> state.user)

  useEffect(() => {
    const loggedinUser =localStorage.getItem("loggedin"); 
    if ( loggedinUser == null) {
      // No localstorage found
      dispatch(rdx_show_login_model());
    } else {
      // Yes, user loggedin before
      dispatch(rdx_hideLoginModel());

      dispatch(rdx_loggedin(loggedinUser));
    }
  }, []);

  const handle_login = async () => {
    // Call API_login

    // if true

    dispatch(rdx_hideLoginModel());
    dispatch(rdx_loggedin(name));
  };

  return (
    <Modal show={showLoginModel}>
      <Modal.Header>
        <Modal.Title>Login Please</Modal.Title>
      </Modal.Header>
      <ModalBody>
        <Form>
          <FormFloating>
            <FormControl
              placeholder="x"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <FormLabel>Your name </FormLabel>
          </FormFloating>

          <FormGroup>
            <Button onClick={handle_login}>Login</Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
}
