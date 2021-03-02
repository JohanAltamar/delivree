import React from "react";
import { useForm } from "react-hook-form";

import ErrorMessage from "../Errors/Message";
import {
  additionalInfo,
  address,
  contactPhone,
  email,
  fullname,
  neighborhood,
  password,
} from "../../utils/inputsValuesMessages";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startCreateNewUserAction } from "../../redux2/actions/userActions";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange",
  });

  const handleRegister = (data) => {
    dispatch(startCreateNewUserAction(data));
  };

  return (
    <form className=" form__register" onSubmit={handleSubmit(handleRegister)}>
      <input
        type="text"
        name="fullname"
        placeholder="Nombre completo"
        ref={register(fullname)}
      />
      <ErrorMessage error={errors.fullname} />

      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        ref={register(password)}
      />
      <ErrorMessage error={errors.password} />

      <input
        type="email"
        name="email"
        placeholder="Correo Electrónico"
        ref={register(email)}
      />
      <ErrorMessage error={errors.email} />

      <input
        type="number"
        name="cellphoneNumber"
        placeholder="Número de contacto"
        ref={register(contactPhone)}
      />
      <ErrorMessage error={errors.cellphoneNumber} />

      <input
        type="text"
        name="address"
        placeholder="Dirección"
        ref={register(address)}
      />
      <ErrorMessage error={errors.address} />

      <input
        type="text"
        name="neighborhood"
        placeholder="Barrio"
        ref={register(neighborhood)}
      />
      <ErrorMessage error={errors.neighborhood} />

      <textarea
        type="text"
        name="additionalInfo"
        placeholder="Información adicional"
        ref={register(additionalInfo)}
      />
      <ErrorMessage error={errors.additionalInfo} />

      <Link to="/login">
        <p>Ya tengo una cuenta. Iniciar sesión.</p>
      </Link>

      <button
        className="btn btn-success btn-block"
        disabled={!formState.isValid}
      >
        Crear usuario
      </button>
    </form>
  );
};

export default RegisterForm;
