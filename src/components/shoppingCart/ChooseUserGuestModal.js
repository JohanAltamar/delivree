import React, {useState} from "react"
import {Modal, Form, Button} from "react-bootstrap";
import {useHistory} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import {initialUser} from "../../redux/reducer";

const ChooseUserGuestModal = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const guestInfo = useSelector(state => state.user.guestCheckoutInfo) || initialUser;

  const handleChange = name => event => {
      dispatch(actions.guestCheckoutUser(name, event.target.value))
  }

  return(
    <Modal
      {...props}
      className="brand-font-family"
      id="guest-checkout-modal"
      centered
    >
      <div id="guest-modal-close-button" onClick={() => dispatch(actions.guestCheckoutModalStatus(false))}>
        <FontAwesomeIcon icon={faTimes}/>
      </div>
      <h5 className="text-center pt-4">Datos de envío</h5>
      <Form
        style={{padding: "20px 8.33%"}}
        onSubmit={() => history.push("/cart/confirmData/guest")}
      >
        <Form.Group>
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Juanito Perez"
            value={guestInfo.fullname}
            onChange={handleChange("fullname")}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Dirección</Form.Label>
          <Form.Control
            type="text"
            placeholder="Calle XX # XX - XX"
            value={guestInfo.address}
            onChange={handleChange("address")}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            placeholder="3001231212"
            value={guestInfo.telephone}
            onChange={handleChange("telephone")}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Barrio</Form.Label>
          <Form.Control
            type="text"
            placeholder="Simón Bolivar"
            value={guestInfo.neighborhood}
            onChange={handleChange("neighborhood")}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Barranquilla"
            value={guestInfo.city}
            onChange={handleChange("city")}
            required
          />
        </Form.Group>
        <div id="guest-modal-continue-button">
          <Button variant="warning" type="submit">Continuar</Button>
        </div>
      </Form>
    </Modal>
  )
}

export default ChooseUserGuestModal;
