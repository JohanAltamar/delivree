import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import confirm2RemoveProductFnc from "./confirm";

const ItemRemoveBtn = ({ id }) => {
  const handleRemoveClick = () => {
    confirm2RemoveProductFnc(id);
  };

  return (
    <button
      className="cart__products-item-remove-btn btn btn-text-error btn-h-2"
      onClick={handleRemoveClick}
    >
      <FontAwesomeIcon icon={faTrash} />
    </button>
  );
};

export default ItemRemoveBtn;
