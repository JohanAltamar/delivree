import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startFetchUserLatestOrdersAction } from "../../../redux2/actions/userActions";
import OrdersList from "./OrdersList";

const UserLastOrders = () => {
  const dispatch = useDispatch();
  const { id, latestOrders } = useSelector((state) => state.userInfo);
  const { loading } = useSelector((state) => state.ui);

  useEffect(() => {
    const dispatchAction = !loading && latestOrders === undefined;
    if (dispatchAction) {
      dispatch(startFetchUserLatestOrdersAction(id));
    }
  }, [dispatch, id, latestOrders, loading]);

  return !loading && latestOrders && latestOrders.length > 0 ? (
    <>
      <OrdersList orders={latestOrders} />
    </>
  ) : (
    <h3 className="text-center margin-auto">
      No hay ordenes recientes, empieza una desde nuestro
      <Link to="/menu">Menú</Link>
    </h3>
  );
};

export default UserLastOrders;
