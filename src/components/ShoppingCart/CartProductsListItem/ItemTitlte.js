import React from "react";
import PropTypes from "prop-types";

const ItemTitlte = ({ title }) => {
  return <span className="cart__products-item-title">{title}</span>;
};

export default ItemTitlte;

ItemTitlte.propTypes = {
  title: PropTypes.string.isRequired,
};
