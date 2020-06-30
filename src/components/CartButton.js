import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function CartButton({id}) {
  const history = useHistory();
  return (
    <div id={id} onClick={()=> history.push("/cart")}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
}

export default CartButton;
