import React from "react";
import { useSelector } from "react-redux";

import ProfileInfo from "./ProfileInfo";
import LogoutButton from "../Buttons/LogoutButton";
import EditProfileButton from "../Buttons/EditProfileButton";
import DeleteProfileButton from "../Buttons/DeleteProfileButton";
import UserLatestOrdersButton from "../Buttons/UserLatestOrdersButton";

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
            <EditProfileButton />
            <DeleteProfileButton />
            <UserLatestOrdersButton />
          </div>
        </div>
      ) : (
        <h5>No hay información del usuario. Vuelva a intentarlo nuevamente.</h5>
      )}
    </section>
  );
};

export default ProfileContainer;
