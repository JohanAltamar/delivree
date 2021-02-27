import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeCartProductAction } from "../../../redux2/actions/cartActions";

const ItemRemoveBtn = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    const confirmed = window.confirm("Desea eliminar el producto seleccionado");
    if (confirmed) dispatch(removeCartProductAction(id));
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
