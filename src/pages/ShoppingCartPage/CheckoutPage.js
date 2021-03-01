import React from "react";
import Layout from "../../components/Layout";
import CheckoutContainer from "../../components/ShoppingCart/CheckoutContainer";


const CheckoutPage = () => {
  return (
    <Layout>
      <div className="grid__padding">
        <CheckoutContainer />
      </div>
    </Layout>
  );
};

export default CheckoutPage;
