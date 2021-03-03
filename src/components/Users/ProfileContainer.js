import React from "react";
import { useSelector } from "react-redux";

import ProfileInfo from "./ProfileInfo";
import LogoutButton from "../Buttons/LogoutButton";
import { Link } from "react-router-dom";

const ProfileContainer = () => {
  const { userInfo } = useSelector((state) => state);

  return (
    <section className="grid__padding">
      {Object.keys(userInfo).length > 2 ? (
        <div className="profile__info-container">
          <h4>Datos del Usuario</h4>
          <LogoutButton />
          <ProfileInfo {...userInfo} />
          <div className="mt-3 buttons-container">
            <Link
              className="btn btn-outline-success"
              to="/dashboard/edit-profile"
            >
              <span>Editar Perfil</span>
            </Link>
            <button className="btn btn-outline-error">Borrar Perfil</button>
            <Link
              className="btn btn-outline-default"
              to="/dashboard/last-orders"
            >
              <span>Ver Pedidos</span>
            </Link>
          </div>
        </div>
      ) : (
        <h5>No hay información del usuario. Vuelva a intentarlo nuevamente.</h5>
      )}
    </section>
  );
};

export default ProfileContainer;
