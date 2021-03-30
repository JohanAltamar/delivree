import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const UserLatestOrdersButton = () => {
  return (
    <Link className="btn btn-outline-default" to="/dashboard/last-orders">
      <FontAwesomeIcon className="mr-2" icon={faClipboardList} />
      <span>Ver Pedidos</span>
    </Link>
  );
};

export default UserLatestOrdersButton;
