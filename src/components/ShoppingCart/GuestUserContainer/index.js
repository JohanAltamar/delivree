import React from "react";
import { useDispatch } from "react-redux";
import { guestInfoModalAction } from "../../../redux2/actions/uiActions";
import InfoModal from "./InfoModal";

const GuestUserContainer = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(guestInfoModalAction(true));
  };

  return (
    <>
      <div className="cart__user-info-guest-container">
        <h6 className="cart__user-info-guest-title">
          Desea continuar como invitado?
        </h6>
        <p>Le pediremos sus datos de contacto para hacerle llegar el pedido</p>
        <button className="btn btn-outline-success" onClick={handleClick}>
          Seguir como invitado
        </button>
      </div>
      <InfoModal />
    </>
  );
};

export default GuestUserContainer;
