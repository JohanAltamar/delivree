import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

const OrderTracker = () => {
  const history = useHistory();
  const { register, handleSubmit, formState, errors } = useForm({
    mode: "onChange",
  });

  const handleSearchOrder = ({ orderNumber }) => {
    history.push(`/orders/${orderNumber}`);
  };

  return (
    <section>
      <h3>Estado de su orden</h3>
      <form
        className="input__order-tracker-container"
        onSubmit={handleSubmit(handleSearchOrder)}
      >
        <input
          className="input__order-tracker-input"
          type="text"
          name="orderNumber"
          placeholder="Ingresa la orden"
          ref={register({
            required: { value: true, message: "La orden es necesaria" },
            maxLength: {
              value: 20,
              message: "Orden demasiado larga, verifique nuevamente.",
            },
          })}
        />
        {errors?.orderNumber && (
          <p className="input__error-message">{errors.orderNumber.message}</p>
        )}
        <button
          className="btn input__order-tracker-button"
          disabled={!formState.isValid}
        >
          <FontAwesomeIcon icon={faSearch} />
          <span className="input__order-tracker-button-content">Buscar</span>
        </button>
      </form>
    </section>
  );
};

export default OrderTracker;
