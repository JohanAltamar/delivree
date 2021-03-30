import React from "react";
import Layout from "../../components/Layout";
import LoginContainer from "../../components/Login";
import SEO from "../../components/SEO";

const LoginPage = () => {
  return (
    <>
      <SEO title="Inicia Sesión" />

      <Layout>
        <LoginContainer />
      </Layout>
    </>
  );
};

export default LoginPage;
