import React from "react"
import {Table, Button} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {useSelector, useDispatch} from "react-redux"
import {updateUserInfoModalStatus, updateUserInfo, loggedUser,
  deleteUserModalStatus, userIsLogged} from "../../redux/actions"
import {initialUser} from "../../redux/reducer"
import UpdateUserInfoModal from "./UpdateUserInfoModal"
import DeleteUserModal from "./DeleteUserModal"
import db, {auth} from "../../services/firebase"

const UserInfoTable = (props) => {
  const guestInfo = useSelector(state => state.guestCheckoutInfo) || {}
  var userInfo = useSelector(state => state.loggedUser.information) || {};
  const modalShow = useSelector(state => state.updateUserInfoModal) || false;
  const deleteUserrModalShow = useSelector(state => state.deleteUserModal) || false
  const dispatch = useDispatch();

  const handleOpenEditModal = () => {
    dispatch(updateUserInfo('all', userInfo))
    dispatch(updateUserInfoModalStatus(true))
  }

  const handleCloseEditModal = () => {
    if(!auth.currentUser){
      return dispatch(userIsLogged(false))
    }
    const uid = auth.currentUser.uid
    const userRef = db.collection('users').doc(uid)
    userRef.get().then(function(doc) {
      if (doc.exists) {
          const userInfo = doc.data()
          dispatch(loggedUser({...userInfo, uid}));
      } else {
          console.log("No such document!");
      }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    dispatch(updateUserInfoModalStatus(false))
    dispatch(updateUserInfo('all', initialUser))
  }

  const handleOpenDeleteUserModal = () => {
    dispatch(deleteUserModalStatus(true))
  }

  const handleCloseDeleteUserModal = () => {
    dispatch(deleteUserModalStatus(false))
  }

  return(
    <div>
    <Table striped bordered hover size="sm">
  <tbody>
    <tr>
      <td>Nombre</td>
      <td>{props.guest ? guestInfo.fullname : userInfo.fullname}</td>
    </tr>
    <tr>
      <td>Dirección</td>
      <td>{props.guest ? guestInfo.address : userInfo.address}</td>
    </tr>
    <tr>
      <td>Telefono</td>
      <td>{props.guest ? guestInfo.telephone : userInfo.telephone}</td>
    </tr>
    <tr>
      <td>Barrio</td>
      <td>{props.guest ? guestInfo.neighborhood : userInfo.neighborhood}</td>
    </tr>
    <tr>
      <td>Ciudad</td>
      <td>{props.guest ? guestInfo.city : userInfo.city}</td>
    </tr>
  </tbody>
</Table>
  <div id="user-info-buttons-container">
    <Button
      variant="warning"
      onClick={handleOpenEditModal}
    >
        Editar  <FontAwesomeIcon icon={faUserEdit}/>
    </Button>
    <Button
      variant="danger"
      onClick={handleOpenDeleteUserModal}
    >
      Eliminar  <FontAwesomeIcon icon={faTrashAlt}/>
    </Button>
  </div>
  <UpdateUserInfoModal
    show={modalShow}
    onHide={handleCloseEditModal}
  />
  <DeleteUserModal show={deleteUserrModalShow} onHide={handleCloseDeleteUserModal}/>
</div>
  )
}

export default UserInfoTable
