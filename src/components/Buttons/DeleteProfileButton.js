import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";

import { deleteUserAction } from '../../redux2/actions/userActions'


const DeleteProfileButton = () => {
  const dispatch = useDispatch();

  const handleDeleteUserClick = () => {
    dispatch(deleteUserAction())
  }
  
  return (
    <button className="btn btn-outline-error" onClick={handleDeleteUserClick}>
      <FontAwesomeIcon className="mr-2" icon={faUserTimes} />
      <span>Borrar Perfil</span>
    </button>
  );
};

export default DeleteProfileButton;
