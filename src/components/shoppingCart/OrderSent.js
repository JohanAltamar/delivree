import React from "react";
import { Toast } from "react-bootstrap";

function OrderSent({ show, onClose }) {
  return (
    <Toast
      onClose={onClose}
      show={show}
      delay={3000}
      autohide
      style={{
        position: "absolute",
        top: 90,
        right: 5,
        color: "#000000",
      }}
    >
      <Toast.Body>Order sent to restaurant successfully!</Toast.Body>
    </Toast>
  );
}

export default OrderSent;
