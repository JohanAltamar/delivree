import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

import { addProduct2CartAction } from "../../../redux2/actions/cartActions";

const FeaturedItemButtons = ({ product }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const handleButtonClick = (factor) => {
    setQty(qty + factor);
  };

  const handleAdd2Cart = () => {
    product.qty = qty;
    product.notes = "";

    dispatch(addProduct2CartAction(product));
  };

  return (
    <>
      <div className="feature__item-buttons">
        <button
          className="btn btn-outline-error btn-h-2"
          onClick={() => handleButtonClick(-1)}
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span className="text-center">{qty}</span>
        <button
          className="btn btn-outline-success btn-h-2"
          onClick={() => handleButtonClick(+1)}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <button
        className="btn btn-block btn-success mt-2"
        onClick={handleAdd2Cart}
      >
        <FontAwesomeIcon className="mr-2" icon={faCartPlus} />
        Agregar
      </button>
    </>
  );
};

export default FeaturedItemButtons;
