import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeCartProductAction } from "../../../redux2/actions/cartActions";
import Swal from "sweetalert2";

const ItemRemoveBtn = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    Swal.fire({
      title: "Estás seguro?",
      text: "No podrás deshacerlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00d000",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, elimínalo!",
      cancelButtonText: "No, salgamos!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Borrado!", "El producto ha sido eliminado.", "success");
        dispatch(removeCartProductAction(id));
      }
    });
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
