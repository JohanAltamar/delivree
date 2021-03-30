import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import ShoppingCartContainer from "../../components/ShoppingCart/index";

const ShoppingCartPage = () => {
  return (
    <>
      <SEO title="Carrito" />

      <Layout>
        <ShoppingCartContainer />
      </Layout>
    </>
  );
};

export default ShoppingCartPage;
