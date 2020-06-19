import React, {useState} from "react";
import * as firebase from "firebase/app";
import clsx from "clsx"
import {Modal, Button, Form} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faSadCry } from "@fortawesome/free-solid-svg-icons";
import {auth} from "../../services/firebase";
import {useDispatch} from "react-redux";
import {userIsLogged} from "../../redux/actions"

const DeleteUserModal = (props) => {
  const dispatch = useDispatch();

  const [userProvidedPassword, setUserProvidedPassword] = useState("")
  const [showRequestPassword, setShowRequestPassword] = useState(false);

  const deleteUser = () => {
    const user = auth.currentUser
    if(!user){
        dispatch(userIsLogged(false))
        props.onHide()
    }
    user.delete().then(function() {
      console.log('User deleted')
      props.onHide();
      dispatch(userIsLogged(false))
    }).catch(function(error) {
      if(error.code === "auth/requires-recent-login"){
        console.log("Re authentication required")
        setShowRequestPassword(true);
      }
    });
  }

  const handlePasswordChange = (event) => {
    setUserProvidedPassword(event.target.value);
  }

  const passwordProvided = () => {
    // console.log('User password provided:', userProvidedPassword)
    const user = auth.currentUser;
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      userProvidedPassword
    );
    user.reauthenticateWithCredential(credential)
    .then(function() {
      console.log('User reauthenticated')
      deleteUser();
    }).catch(function(error) {
      console.log(error)
    });
  }
  return(
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          Deseas eliminar tu usuario? Te extrañaremos!
        </Modal.Header>
        <Modal.Body>
          <div id="delete-user-buttons-container">
            <Button
              variant="danger"
              onClick={deleteUser}
            >
              SI <FontAwesomeIcon icon={faSadCry}/>
            </Button>
            <Button
              variant="success"
              onClick={props.onHide}
            >
              NO <FontAwesomeIcon icon={faSmile}/>
            </Button>
          </div>
          <Form id="request-password-form" className={clsx(!showRequestPassword && ("d-none"))}>
            <Form.Control
              type="password"
              value={userProvidedPassword}
              placeholder="Confirma tu contraseña"
              onChange={handlePasswordChange}
              required
            />
            <Button variant="danger" onClick={passwordProvided}>Borrar perfil</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default DeleteUserModal;
