import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const ItemQtyButtons = ({ subtractFnc, addFnc }) => {
  return (
    <div className="cart__products-item-buttons">
      <button
        className="btn btn-error btn-h-2 mt-2 mb-2"
        onClick={() => subtractFnc()}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button
        className="btn btn-success btn-h-2 mt-2 mb-2"
        onClick={() => addFnc()}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default ItemQtyButtons;

ItemQtyButtons.propTypes = {
  addFnc: PropTypes.func.isRequired,
  subtractFnc: PropTypes.func.isRequired,
};
