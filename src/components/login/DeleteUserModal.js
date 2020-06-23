import React, {useState, useEffect, useCallback} from "react";
import * as firebase from "firebase/app";
import clsx from "clsx"
import {Modal, Button, Form} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faSadCry } from "@fortawesome/free-solid-svg-icons";
import db, {auth} from "../../services/firebase";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../redux/actions";

const DeleteUserModal = (props) => {
  const dispatch = useDispatch();
  const authUser = useSelector(state => state.loggedUser);

  const [userProvidedPassword, setUserProvidedPassword] = useState("")
  const [showRequestPassword, setShowRequestPassword] = useState(false);

  const moveUserInfoTrigger = useSelector(state => state.moveTrigger);
  const removeUserInfoTrigger = useSelector(state => state.removeTrigger);

  const removeUserInfoFromCollection = useCallback(() => {
    // console.log('Removing authUser info from users collection')
    const authUserRef = db.collection('users').doc(authUser.uid);
    authUserRef.delete()
      .then(function(){
        // console.log('authUser info removed from users collection');
        // props.onHide();
        dispatch(actions.deletedUserTriggers('deletedUser'));
      })
      .catch(function(error){
        console.log(error.code, error.message)
      })
  }, [authUser.uid, dispatch])

  const moveUserInfoToCollection = useCallback(() => {
    // console.log('Moving authUser info to deleteUsers collection')
    const authUserDeleteRef = db.collection('deletedUsers').doc(authUser.uid);
    authUserDeleteRef.set(authUser)
    .then(function(){
      // console.log('authUser info moved to deletedUsers collection')
      dispatch(actions.deletedUserTriggers('removeFromUsers'));
    })
    .catch(function(error){
      console.log(error.code, error.message)
    })
  },[authUser, dispatch])

  const deleteUser = () => {
    const user = auth.currentUser
    if(!user){
        dispatch(actions.userIsLogged(false))
        return props.onHide()
    }

    user.delete()
    .then(function() {
      // console.log('Deleting user ...')
      //move and delete authUser info
      dispatch(actions.deletedUserTriggers('moveToDeletedUsers'))
      // props.onHide();
      // dispatch(actions.userIsLogged(false))
    })
    .catch(function(error) {
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
    if(!user){
      props.onHide();
      return dispatch(actions.userIsLogged(false))
    }
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      userProvidedPassword
    );
    user.reauthenticateWithCredential(credential)
    .then(function() {
      // console.log('User reauthenticated')
      deleteUser();
    }).catch(function(error) {
      console.log(error)
    });
  }

  useEffect(()=>{
    const moveUserEffect = () => {
      if(moveUserInfoTrigger){
        moveUserInfoToCollection();
      }
    };
    moveUserEffect()
  },[moveUserInfoTrigger, moveUserInfoToCollection]);

  useEffect(()=>{
    const removeUserEffect = () => {
      if(removeUserInfoTrigger){
        removeUserInfoFromCollection();
      }
    };
    removeUserEffect();
  },[removeUserInfoTrigger, removeUserInfoFromCollection]);

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
              onClick={() => {setShowRequestPassword(true)}}
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
