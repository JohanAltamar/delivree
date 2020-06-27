import React from "react";
import {Modal, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const DeleteOrderCheckoutModal = (props) => {
return(
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="md"
      centered
      className="brand-font-family"
      id="delete-order-modal"
    >
      <h6 id="delete-order-modal-title">¿Desea vaciar el carrito de compras?</h6>
      <div id="close-icon" onClick={props.onHide}>
        <FontAwesomeIcon icon={faTimes}/>
      </div>
      <div id="delete-order-button-container">
        <Button
          variant="outline-danger"
          onClick={props.onDelete}
        >
          Vaciar Carrito
        </Button>
        <Button
          variant="warning"
          onClick={props.onHide}
        >
          Continuar Compra
        </Button>
      </div>
    </Modal>
  )
}

export default DeleteOrderCheckoutModal;
