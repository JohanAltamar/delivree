import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logoutUserAction } from "../../redux2/actions/userActions";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogutClick = () => {
    dispatch(logoutUserAction());
  };

  return (
    <button
      className="btn btn-text-error btn-sign-out"
      onClick={handleLogutClick}
    >
      <FontAwesomeIcon icon={faSignOutAlt} />
    </button>
  );
};

export default LogoutButton;
