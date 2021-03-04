import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startFetchUserLatestOrdersAction } from "../../../redux2/actions/userActions";
import OrdersList from "./OrdersList";

const UserLastOrders = () => {
  const dispatch = useDispatch();
  const { id, latestOrders } = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (!latestOrders) {
      dispatch(startFetchUserLatestOrdersAction(id));
    }
  }, [dispatch, id, latestOrders]);

  return (
    <>
      <OrdersList orders={latestOrders} />
    </>
  );
};

export default UserLastOrders;
