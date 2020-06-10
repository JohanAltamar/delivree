import React from "react";
import { Toast } from "react-bootstrap";

function AddedToCart({ show, onClose }) {
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
      <Toast.Body>Product added to Shopping Cart successfully!</Toast.Body>
    </Toast>
  );
}

export default AddedToCart;
