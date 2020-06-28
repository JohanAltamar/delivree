import React from "react";
import {Modal, Button, Form} from "react-bootstrap";
import {useSelector, useDispatch} from "react-redux";
import {updateUserInfo, guestCheckoutUser} from "../../redux/actions"
import db, {auth} from "../../services/firebase"

const UpdateUserInfoModal = (props) => {
  const user = useSelector(state => state.updateUserInfo) || {}
  const dispatch = useDispatch();

  const handleUpdate = () => {
    if(props.guest){
      console.log("Guest user")
      dispatch(guestCheckoutUser('all',user))
      props.onHide()
    }
    else{
      const userRef = db.collection('users').doc(auth.currentUser.uid)
      userRef.update({
        "information": user
      })
      .then(function(){
        props.onHide()
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
    }
  }
  return(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <h6>Actualizar Información Personal</h6>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="user-name">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="input"
              placeholder="John Doe"
              value={user.fullname}
              onChange={(event) =>
                dispatch(updateUserInfo("fullname", event.target.value))
              }
              required
            />
          </Form.Group>
          <Form.Group controlId="user-phone">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="input"
              placeholder="3055622663"
              value={user.telephone}
              onChange={(event) =>
                dispatch(updateUserInfo("telephone", event.target.value))
              }
              required
            />
          </Form.Group>
          <Form.Group controlId="user-address">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="input"
              placeholder="Calle 50 # 25 - 56"
              value={user.address}
              onChange={(event) =>
                dispatch(updateUserInfo("address", event.target.value))
              }
              required
            />
          </Form.Group>
          <Form.Group controlId="user-town">
            <Form.Label>Barrio</Form.Label>
            <Form.Control
              type="input"
              placeholder="Villa Hermosa"
              value={user.neighborhood}
              onChange={(event) =>
                dispatch(updateUserInfo("neighborhood", event.target.value))
              }
              required
            />
          </Form.Group>
          <Form.Group controlId="user-city">
            <Form.Label>Municipio</Form.Label>
            <Form.Control
              type="input"
              placeholder="Barranquilla"
              value={user.city}
              onChange={(event) => dispatch(updateUserInfo("city", event.target.value))}
            />
          </Form.Group>
          <Button variant="warning" onClick={handleUpdate}>
            Actualizar
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default UpdateUserInfoModal;
