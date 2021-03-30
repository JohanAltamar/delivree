import React from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import EditProfileInfo from "../../components/Users/EditProfileInfo";
import UserLastOrders from "../../components/Users/UserLastOrders";

const ProfileOptionsPage = () => {
  const { params } = useRouteMatch();
  const { profileOption } = params;

  return (
    <>
      <SEO title="Perfil" />
      <Layout>
        <section className="grid__padding">
          {profileOption === "edit-profile" && <EditProfileInfo />}
          {profileOption === "last-orders" && <UserLastOrders />}

          {profileOption !== "edit-profile" &&
            profileOption !== "last-orders" && <Redirect to="/dashboard" />}
        </section>
      </Layout>
    </>
  );
};

export default ProfileOptionsPage;
