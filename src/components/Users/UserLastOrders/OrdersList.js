import React from "react";
import PropTypes from "prop-types";
import OrdersListItem from "./OrdersListItem";

const OrdersList = ({ orders }) => {
  return orders?.length ? (
    <>
      <h4 className="text-center">Pedidos recientes</h4>
      {orders.map((order) => (
        <OrdersListItem orderInfo={order} key={order.orderID} />
      ))}
    </>
  ) : (
    <h2>No hay órdenes recientes </h2>
  );
};

export default OrdersList;

OrdersList.propTypes = {
  orders: PropTypes.array,
};
