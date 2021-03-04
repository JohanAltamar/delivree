import React from "react";
import PropTypes from "prop-types";
import OrderInfo from "../../Orders/OrderInfo";

const OrdersListItem = ({ orderInfo }) => {
  return (
    <OrderInfo orderInfo={orderInfo} key={orderInfo.orderID} userDashboard />
  );
};

export default OrdersListItem;

OrdersListItem.propTypes = {
  orderInfo: PropTypes.object.isRequired,
};
