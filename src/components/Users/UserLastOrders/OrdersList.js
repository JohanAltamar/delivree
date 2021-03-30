import React from "react";
import PropTypes from "prop-types";
import OrdersListItem from "./OrdersListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const OrdersList = ({ orders }) => {
  return orders?.length ? (
    <>
      <h4 className="text-center orders__last-orders-title">
        <Link className="orders__last-orders-title-back-btn" to="/dashboard">
          <FontAwesomeIcon icon={faChevronLeft} />
        </Link>
        <span>Pedidos recientes</span>
      </h4>
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
