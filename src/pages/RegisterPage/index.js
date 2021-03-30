import React from "react";
import Layout from "../../components/Layout";
import RegisterContainer from "../../components/Register";
import SEO from "../../components/SEO";

const RegisterPage = () => {
  return (
    <>
      <SEO title="Crea un usuario" />

      <Layout>
        <RegisterContainer />
      </Layout>
    </>
  );
};

export default RegisterPage;
