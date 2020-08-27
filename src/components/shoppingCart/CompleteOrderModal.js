import React from 'react';
import { useState, useEffect } from 'react';
import { Modal, Button, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const CompletedOrderModal = (props) => {
  const orderID = useSelector((state) => state.shoppingCart.orderID);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    if (orderID) {
      setloading(false);
    }
  }, [orderID]);

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      centered
      backdrop="static"
      onEscapeKeyDown={props.onEscapeKeyDown}
      className="brand-font-family delete-order-modal"
    >
      <h5 className="delete-order-modal-title">
        Su pedido ya fue enviado al restaurante. Desea hacerle seguimiento?
      </h5>
      <div className="delete-order-button-container">
        <Button variant="outline-danger" onClick={props.onEscapeKeyDown}>
          Volver al inicio
        </Button>

        <Button
          variant="warning"
          onClick={props.followOrderStatus}
          disabled={loading}
        >
          {loading ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            <span>Seguir Pedido</span>
          )}
        </Button>
      </div>
    </Modal>
  );
};

export default CompletedOrderModal;
