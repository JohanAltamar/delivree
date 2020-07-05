import React from "react";
import {Modal, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const PwaModal = (props) => {
  return(
    <Modal
      show={props.show}
      onHide={props.onHide}
      centered
      onEscapeKeyDown={()=>props.installPWA(false)}
      className="brand-font-family delete-order-modal"
    >
      <div
        onClick={() => props.installPWA(false)}
        style={{
          position:"absolute",
          top: "0",
          right:"0",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor:"pointer"
        }}
      >
        <FontAwesomeIcon icon={faTimes}/>
      </div>
      <h6 className="delete-order-modal-title">Deseas guardarnos en tu telefono móvil?</h6>
      <div className="delete-order-button-container">
        <Button variant="outline-danger" onClick={() => props.installPWA(false)}>En otro momento</Button>
        <Button variant="warning" onClick={() => props.installPWA(true)}>Guardar en Celular</Button>
      </div>
    </Modal>
  )
}

export default PwaModal;
