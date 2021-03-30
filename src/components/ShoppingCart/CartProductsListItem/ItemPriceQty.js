import React from "react";
import PropTypes from "prop-types";

const ItemPriceQty = ({ price, qty }) => {
  return (
    <>
      <span className="cart__products-item-price mt-2">
        $ {price.toLocaleString("de-DE")}
      </span>
      <span className="cart__products-item-qty mt-2"> x {qty} </span>
      <span className="cart__products-item-total mt-2">
        $ {(price * qty).toLocaleString("de-DE")}
      </span>
    </>
  );
};

export default ItemPriceQty;

ItemPriceQty.propTypes = {
  price: PropTypes.number.isRequired,
  qty: PropTypes.number.isRequired,
};
