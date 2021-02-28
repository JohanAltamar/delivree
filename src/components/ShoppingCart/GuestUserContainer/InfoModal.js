import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import OutsideDispatcher from "../../Misc/ClickOutsideDispatcher";
import { guestInfoModalAction } from "../../../redux2/actions/uiActions";
import {
  address,
  contactPhone,
  fullname,
  neighborhood,
  additionalInfo,
} from "../../../utils/inputsValuesMessages";
import ErrorMessage from "../../Errors/Message";
import { setUserInfoAction } from "../../../redux2/actions/userActions";


const InfoModal = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { guestInfoModal } = useSelector((state) => state.ui);

  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange",
  });

  const handleCloseModal = () => {
    dispatch(guestInfoModalAction(false));
  };

  const handleSubmitGuestInfo = (data) => {
    dispatch(setUserInfoAction(data));
    history.push("/cart/checkout");
  };

  return (
    guestInfoModal && (
      <div className="cart__user-info-guest-modal-container">
        <OutsideDispatcher action={guestInfoModalAction(false)}>
          <form
            className="cart__user-info-guest-modal-form"
            onSubmit={handleSubmit(handleSubmitGuestInfo)}
          >
            <span
              className="cart__user-info-guest-modal-close-btn btn-text-error"
              onClick={handleCloseModal}
            >
              <FontAwesomeIcon icon={faTimes} />
            </span>
            <h5>Datos de envío</h5>
            <input
              name="fullname"
              type="text"
              placeholder="Nombre completo"
              ref={register(fullname)}
            />
            <ErrorMessage error={errors.fullname} />

            <input
              name="cellphoneNumber"
              type="number"
              placeholder="Número de contacto"
              ref={register(contactPhone)}
            />
            <ErrorMessage error={errors.cellphoneNumber} />

            <input
              name="address"
              type="text"
              placeholder="Dirección"
              ref={register(address)}
            />
            <ErrorMessage error={errors.address} />

            <input
              name="neighborhood"
              type="text"
              placeholder="Barrio"
              ref={register(neighborhood)}
            />
            <ErrorMessage error={errors.neighborhood} />

            <textarea
              name="additionalInfo"
              type="text"
              placeholder="Información adicional"
              ref={register(additionalInfo)}
              rows={2}
            />
            <ErrorMessage error={errors.additionalInfo} />
            <button
              className="btn btn-outline-success"
              disabled={!formState.isValid}
            >
              Continuar
            </button>
          </form>
        </OutsideDispatcher>
      </div>
    )
  );
};

export default InfoModal;
