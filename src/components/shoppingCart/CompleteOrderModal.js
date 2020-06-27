import React from "react"
import {Modal, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const CompletedOrderModal = (props) => {
  return(
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="sm"
      centered
      backdrop="static"
      onEscapeKeyDown={props.onEscapeKeyDown}
      className="brand-font-family delete-order-modal"
    >
      <h5 className="delete-order-modal-title">Su pedido ya fue enviado al restaurante. Desea hacerle seguimiento?</h5>
      <div className="delete-order-button-container">
        <Button
          variant="outline-danger"
          onClick={props.onEscapeKeyDown}
        >
          Volver al inicio
        </Button>
        <Button
        variant="warning"
        onClick={props.followOrderStatus}
        >
        Seguir Pedido
        </Button>
      </div>
    </Modal>
  )
}

export default CompletedOrderModal;
