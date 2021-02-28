import React from "react";
import PropTypes from "prop-types";

const CartResumeContainer = ({ total }) => {
  return (
    <div className="cart__resume-wrapper">
      <div className="cart__resume-container">
        <h6 className="cart__resume-title">Resumen</h6>
        <h5 className="cart__resume-total mb-3">
          Total: $ <span>{total.toLocaleString("de-DE")}</span>
        </h5>
        <button className="btn btn-primary">Ordena Ahora</button>
      </div>
    </div>
  );
};

export default CartResumeContainer;

CartResumeContainer.propTypes = {
  total: PropTypes.number.isRequired,
};
