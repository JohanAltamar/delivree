import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartButton({id}) {
  return (
    <Link id={id} to="/cart">
      <FontAwesomeIcon icon={faShoppingCart} />
    </Link>
  );
}

export default CartButton;
