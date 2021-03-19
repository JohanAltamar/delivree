import React from "react";
import Layout from "../../components/Layout";
import RecoverPasswordContainer from "../../components/Recover";
import SEO from "../../components/SEO";

const RecoverPage = () => {
  return (
    <>
      <SEO title="Recupera tu conraseña" />

      <Layout>
        <RecoverPasswordContainer />
      </Layout>
    </>
  );
};

export default RecoverPage;
