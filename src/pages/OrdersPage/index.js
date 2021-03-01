import React from "react";
import Layout from "../../components/Layout";
import OrdersTracker from "../../components/Orders/Tracker";

const OrdersPage = () => {
  return (
    <Layout>
      <OrdersTracker noTitle />
      <div className="grid__padding text-center">
        <h3>Ingrese el Id de su orden</h3>
      </div>
    </Layout>
  );
};

export default OrdersPage;
