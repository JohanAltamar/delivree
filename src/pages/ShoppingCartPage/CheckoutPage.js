import React from "react";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import CheckoutContainer from "../../components/ShoppingCart/CheckoutContainer";

const CheckoutPage = () => {
  return (
    <>
      <SEO title="Finaliza tu compra" />

      <Layout>
        <div className="grid__padding">
          <CheckoutContainer />
        </div>
      </Layout>
    </>
  );
};

export default CheckoutPage;
