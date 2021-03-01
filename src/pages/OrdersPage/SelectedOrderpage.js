import React from "react";
import Layout from "../../components/Layout";
import OrderInfoContainer from "../../components/Orders/OrderInfoContainer";
import OrdersTracker from "../../components/Orders/Tracker";

const SelectedOrderpage = () => {
  return (
    <Layout>
      <OrdersTracker noTitle />
      <div className="grid__padding">
        <OrderInfoContainer />
      </div>
    </Layout>
  );
};

export default SelectedOrderpage;
