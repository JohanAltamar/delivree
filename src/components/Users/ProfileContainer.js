import React from "react";
import { useSelector } from "react-redux";

import ProfileInfo from './ProfileInfo'
import LogoutButton from "../Buttons/LogoutButton";


const ProfileContainer = () => {
  const { userInfo } = useSelector((state) => state);

  return (
    <section className="grid__padding">
      {Object.keys(userInfo).length > 2 ? (
        <div className="profile__info-container">
          <h4>Datos del Usuario</h4>
          <LogoutButton />
          <ProfileInfo {...userInfo}/>
          <div className="mt-3 buttons-container">
            <button className="btn btn-outline-success">Editar Perfil</button>
            <button className="btn btn-outline-error">Borrar Perfil</button>
            <button className="btn btn-outline-default">Ver Pedidos</button>
          </div>
        </div>
      ) : (
        <h5>No hay información del usuario. Vuelva a intentarlo nuevamente.</h5>
      )}
    </section>
  );
};

export default ProfileContainer;
