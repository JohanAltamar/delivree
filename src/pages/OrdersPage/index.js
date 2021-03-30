import React from "react";
import Layout from "../../components/Layout";
import OrdersTracker from "../../components/Orders/Tracker";
import SEO from "../../components/SEO";

const OrdersPage = () => {
  return (
    <>
      <SEO title="Rastrea tus pedidos" />

      <Layout>
        <OrdersTracker noTitle />
        <div className="grid__padding text-center">
          <h3>Ingrese el Id de su orden</h3>
        </div>
      </Layout>
    </>
  );
};

export default OrdersPage;
