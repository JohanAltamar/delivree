import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import ErrorMessage from "../Errors/Message";
import { email } from "../../utils/inputsValuesMessages";
import { startPasswordRecoverAction } from "../../redux2/actions/userActions";

const RecoverPasswordContainer = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState, errors } = useForm({
    mode: "onChange",
  });

  const handleRecover = ({ email }) => {
    dispatch(startPasswordRecoverAction(email));
  };

  return (
    <section className="grid__padding mt-5">
      <form className="form__recover" onSubmit={handleSubmit(handleRecover)}>
        <h4 className="text-center">Recuperar Contraseña</h4>
        <input
          type="email"
          name="email"
          ref={register(email)}
          placeholder="Correo Electrónico"
        />
        <ErrorMessage error={errors.email} />

        <button
          className="btn btn-default btn-block"
          disabled={!formState.isValid}
        >
          Recuperar Contraseña
        </button>
      </form>
    </section>
  );
};

export default RecoverPasswordContainer;
