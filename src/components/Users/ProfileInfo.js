import React from "react";
import PropTypes from "prop-types";

const ProfileInfo = ({
  fullname,
  telephone,
  address,
  neighborhood,
  email,
}) => {
  return (
    <>
      <h6>
        <span>Nombre: </span> <span>{fullname}</span>
      </h6>
      <h6>
        <span>Email: </span> <span>{email}</span>
      </h6>
      <h6>
        <span>Celular: </span> <span>{telephone}</span>
      </h6>
      <h6>
        <span>Dirección: </span> <span>{address}</span>
      </h6>
      <h6>
        <span>Barrio: </span> <span>{neighborhood}</span>
      </h6>
    </>
  );
};

export default ProfileInfo;

ProfileInfo.propTypes = {
  address: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  neighborhood: PropTypes.string.isRequired,
};
