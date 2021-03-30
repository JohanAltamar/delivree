import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

const EditProfileButton = () => {
  return (
    <Link className="btn btn-outline-success" to="/dashboard/edit-profile">
      <FontAwesomeIcon className="mr-2" icon={faUserEdit} />
      <span>Editar Perfil</span>
    </Link>
  );
};

export default EditProfileButton;
