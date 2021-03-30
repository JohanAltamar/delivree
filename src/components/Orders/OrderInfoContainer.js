import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import { startFecthOrderInfoAction } from "../../redux2/actions/ordersInfoAction";
import OrderInfo from "./OrderInfo";


const OrderInfoContainer = () => {
  const { params } = useRouteMatch();
  const { orderID } = params;

  const dispatch = useDispatch();

  const ordersInfo = useSelector((state) => state.ordersInfo);
  const { loading } = useSelector(state => state.ui);

  useEffect(() => {
    if (orderID) {
      dispatch(startFecthOrderInfoAction(orderID));
    }
  }, [orderID, dispatch]);

  return loading ? (
    <h3 className="text-center mt-5">Cargando...</h3>
  ) : Object.keys(ordersInfo).length > 3 ? ( //error, loading and id are fixed
    <OrderInfo orderInfo={ordersInfo} />
  ) : (
    <h6 className="text-center mt-5">
      No fue encontrada la orden <b>{orderID}</b>. Verifica y vuelve a
      intentarlo
    </h6>
  );
};

export default OrderInfoContainer;
