import React from "react";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import ProfileContainer from "../../components/Users/ProfileContainer";

const ProfilePage = () => {
  return (
    <>
      <SEO title="Perfil" />
      <Layout>
        <ProfileContainer />
      </Layout>
    </>
  );
};

export default ProfilePage;
