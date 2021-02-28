import React from "react";
import PropTypes from "prop-types";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addProduct2CartAction } from "../../redux2/actions/cartActions";

const ProductSelectedAdd2Cart = ({ product }) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(addProduct2CartAction(product));
  };

  return (
    <button
      className="menu__item-selected-product-add-button btn btn-outline-success btn-block mt-3"
      onClick={handleButtonClick}
    >
      <span className="mr-2">
        <FontAwesomeIcon icon={faCartPlus} />
      </span>
      Agregar
    </button>
  );
};

export default ProductSelectedAdd2Cart;

ProductSelectedAdd2Cart.propTypes = {
  product: PropTypes.object.isRequired,
};
