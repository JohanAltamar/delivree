import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const CartButton = () => {
  const { pathname } = useLocation();
  const { products } = useSelector((state) => state.shoppingCart);

  return products.length > 0 && !pathname.includes("cart") ? (
    <Link className="btn-cart" to="/cart">
      <FontAwesomeIcon icon={faShoppingCart} />
    </Link>
  ) : (
    <></>
  );
};

export default CartButton;
