import React from "react";
import PropTypes from "prop-types";
import CartProductsListItem from "./CartProductsListItem/index";

const CartProductsList = ({ products }) => {
  return products.map((product) => <CartProductsListItem key={product.id} product={product} />);
};

export default CartProductsList;

CartProductsList.propTypes = {
  products: PropTypes.array.isRequired,
};
