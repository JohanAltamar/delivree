import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DeleteProfileButton = () => {
  return (
    <button className="btn btn-outline-error">
      <FontAwesomeIcon className="mr-2" icon={faUserTimes} />
      <span>Borrar Perfil</span>
    </button>
  );
};

export default DeleteProfileButton;
