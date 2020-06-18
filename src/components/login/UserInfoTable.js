import React from "react"
import {Table, Button} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {useSelector, useDispatch} from "react-redux"
import {updateUserInfoModalStatus, updateUserInfo, loggedUser} from "../../redux/actions"
import UpdateUserInfoModal from "./UpdateUserInfoModal"
import db, {auth} from "../../services/firebase"

const UserInfoTable = () => {
  const userInfo = useSelector(state => state.loggedUser.information) || {};
  // console.log(userInfo)
  const modalShow = useSelector(state => state.updateUserInfoModal) || false;
  const dispatch = useDispatch();

  const handleOpenEditModal = () => {
    dispatch(updateUserInfo('all',userInfo))
    dispatch(updateUserInfoModalStatus(true))
  }

  const handleCloseEditModal = () => {
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
  }
  return(
    <div>
    <Table striped bordered hover size="sm">
  <tbody>
    <tr>
      <td>Nombre</td>
      <td>{userInfo.fullname}</td>
    </tr>
    <tr>
      <td>Dirección</td>
      <td>{userInfo.address}</td>
    </tr>
    <tr>
      <td>Telefono</td>
      <td>{userInfo.telephone}</td>
    </tr>
    <tr>
      <td>Barrio</td>
      <td>{userInfo.neighborhood}</td>
    </tr>
    <tr>
      <td>Ciudad</td>
      <td>{userInfo.city}</td>
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
    <Button variant="danger">Eliminar  <FontAwesomeIcon icon={faTrashAlt}/></Button>
  </div>
  <UpdateUserInfoModal
    show={modalShow}
    onHide={handleCloseEditModal}
  />
</div>
  )
}

export default UserInfoTable
