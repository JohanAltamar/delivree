import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import db, { auth } from "../../services/firebase";
import moment from "moment";
import "moment/locale/es";

const RecentOrders = () => {
  moment.locale("es");
  // const recentOrders = useSelector((state) => state.user.loggedUser.orders) || [];
  const [recentOrders, setRecentOrders] = useState([]);
  const userID = useSelector((state) => state.user.loggedUser.uid);

  useEffect(() => {
    db.collection("orders")
      .where("uid", "==", userID)
      .onSnapshot(function (querySnapshot) {
        var userOrders = [];
        querySnapshot.forEach(function (doc) {
          const orderObj = { ...doc.data(), orderId: doc.id };
          userOrders.push(orderObj);
        });

        userOrders.sort(
          (a, b) =>
            moment(b.timestamp).format("X") - moment(a.timestamp).format("X")
        );
        if (process.env.NODE_ENV === "development") {
          console.log(userOrders);
        }
        setRecentOrders(userOrders);
      });
  }, []);

  return (
    <section id="orders-container">
      {recentOrders.map((order, idx) => (
        <section key={idx} className="recent-order-container">
          Orden Id:{" "}
          <Link to={`/orders?id=${order.orderId}`}>
            {order.orderId.substring(0, 6)}...
          </Link>
          {order.cart.map((item, index) => (
            <div
              key={index}
            >{`${item.qty} x ${item.name} ${item.category}`}</div>
          ))}
          {order.total !== undefined && (
            <div>Total: $ {order.total.toLocaleString("DE-de") || 0}</div>
          )}
          Estado: {order.status}
          <br />
          ... {moment(order.timestamp).fromNow()}
        </section>
      ))}
      {recentOrders.length === 0 ? (
        <div id="no-recent-orders">
          <h6>
            No hay pedido aún. <Link to="/menu">Comencemos ahora.</Link>
          </h6>
        </div>
      ) : null}
    </section>
  );
};

export default RecentOrders;
