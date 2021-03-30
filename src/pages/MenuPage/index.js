import React from "react";
import Layout from "../../components/Layout";
import MenuContainer from "../../components/Menu";
import SEO from "../../components/SEO";

const MenuPage = () => {
  return (
    <>
      <SEO title="Menú" />
      <Layout>
        <MenuContainer />
      </Layout>
    </>
  );
};

export default MenuPage;
