import React from "react";
import { useDispatch } from "react-redux";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  clearSelectedProduct,
  updateSelectedProduct,
} from "../../redux2/actions/productsActions";

const ProductSelectedControlButtons = ({ product }) => {
  const { qty } = product;
  const dispatch = useDispatch();

  const handleQtyInputChange = ({ target }) => {
    const { value } = target;
    if (parseInt(value) < 1) {
      dispatch(clearSelectedProduct());
    } else {
      dispatch(updateSelectedProduct({ ...product, qty: parseInt(value) }));
    }
  };

  const handleQtyBtnClick = (factor) => {
    if (qty <= 1 && factor === -1) {
      dispatch(clearSelectedProduct());
    } else {
      dispatch(updateSelectedProduct({ ...product, qty: qty + factor }));
    }
    if (!qty && factor === -1) {
      dispatch(clearSelectedProduct());
    } else if (!qty && factor === 1) {
      dispatch(updateSelectedProduct({ ...product, qty: 1 }));
    }
  };

  return (
    <div className="menu__item-selected-product-buttons flex justify-space-between mt-3">
      <button
        className="btn btn-error mr-2"
        onClick={() => handleQtyBtnClick(-1)}
      >
        <FontAwesomeIcon icon={qty > 1 ? faMinus : faTrash} />
      </button>
      <input
        className="text-center"
        type="number"
        name="qty"
        value={qty}
        onChange={handleQtyInputChange}
      />
      <button
        className="btn btn-success ml-2"
        onClick={() => handleQtyBtnClick(+1)}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default ProductSelectedControlButtons;
