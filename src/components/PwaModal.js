import React from "react";
import {Modal, Button} from "react-bootstrap";

const PwaModal = (props) => {
  return(
    <Modal
      show={props.show}
      onHide={props.onHide}
      centered
      onEscapeKeyDown={()=>props.installPWA(false)}
    >
      <h6>Deseas guardarnos en tu telefono móvil?</h6>
      <Button variant="warning" onClick={() => props.installPWA(true)}>Guardar en Pantalla</Button>
      <Button variant="outline-warning" onClick={() => props.installPWA(false)}>En otro momento</Button>
    </Modal>
  )
}

export default PwaModal;
