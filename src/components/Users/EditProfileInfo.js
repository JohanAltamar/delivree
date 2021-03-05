import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faSave } from "@fortawesome/free-solid-svg-icons";

import ErrorMessage from "../Errors/Message";
import * as rules from "../../utils/inputsValuesMessages";
import { editUserInfoAction } from "../../redux2/actions/userActions";
import { Link } from "react-router-dom";

const EditProfileInfo = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState, errors } = useForm({
    mode: "onChange",
  });

  const { userInfo } = useSelector((state) => state);
  const {
    fullname,
    cellphoneNumber,
    address,
    neighborhood,
    email,
    additionalInfo,
  } = userInfo;

  const handleEditUserInfo = (data) => {
    dispatch(editUserInfoAction(data));
  };

  return (
    <form className="form__edit" onSubmit={handleSubmit(handleEditUserInfo)}>
      <h4 className="text-center form__title">
        <Link className="form__title-back-btn" to="/dashboard">
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
        <span>Editar Perfil</span>
      </h4>
      <input
        placeholder="Nombre completo"
        type="text"
        name="fullname"
        defaultValue={fullname}
        ref={register(rules.fullname)}
      />
      <ErrorMessage error={errors.fullname} />
      <input
        placeholder="Correo Electrónico"
        type="text"
        name="email"
        defaultValue={email}
        ref={register(rules.email)}
      />
      <ErrorMessage error={errors.email} />
      <input
        placeholder="Celular"
        type="text"
        name="cellphoneNumber"
        defaultValue={cellphoneNumber}
        ref={register(rules.contactPhone)}
      />
      <ErrorMessage error={errors.cellphoneNumber} />
      <input
        placeholder="Dirección"
        type="text"
        name="address"
        defaultValue={address}
        ref={register(rules.address)}
      />
      <ErrorMessage error={errors.address} />
      <input
        placeholder="Barrio"
        type="text"
        name="neighborhood"
        defaultValue={neighborhood}
        ref={register(rules.neighborhood)}
      />
      <ErrorMessage error={errors.neighborhood} />
      <textarea
        name="additionalInfo"
        defaultValue={additionalInfo}
        placeholder="Escriba alguna información adicional ..."
        rows={2}
        ref={register(rules.additionalInfo)}
      />
      <ErrorMessage error={errors.additionalInfo} />

      <input
        type="password"
        name="password"
        placeholder="Escriba la contraseña actual"
        ref={register(rules.password)}
      />
      <ErrorMessage error={errors.password} />
      <input
        type="password"
        name="newPassword"
        placeholder="Escriba una nueva contraseña"
        ref={register(rules.newPassword)}
      />
      <ErrorMessage error={errors.newPassword} />
      <button
        className="btn btn-success btn-block"
        disabled={!formState.isValid}
      >
        <FontAwesomeIcon className="mr-2" icon={faSave} />
        <span>Guardar información</span>
      </button>
    </form>
  );
};

export default EditProfileInfo;
// connect(({ firstName, lastName }) => ({ firstName, lastName }),)(YourForm);
