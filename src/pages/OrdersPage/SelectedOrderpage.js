import React from "react";
import Layout from "../../components/Layout";
import OrderInfoContainer from "../../components/Orders/OrderInfoContainer";
import OrdersTracker from "../../components/Orders/Tracker";
import SEO from "../../components/SEO";

const SelectedOrderpage = () => {
  return (
    <>
      <SEO title="Rastrea tus pedidos" />

      <Layout>
        <OrdersTracker noTitle />
        <div className="grid__padding">
          <OrderInfoContainer />
        </div>
      </Layout>
    </>
  );
};

export default SelectedOrderpage;
