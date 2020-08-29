import React from 'react';
import Loading from '../Loading';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';
import { useLoadLatestOrders } from '../../hooks/useLoadLatestOrders';

const RecentOrders = () => {
  moment.locale('es');
  const userID = useSelector((state) => state.user.loggedUser.uid);
  const { recentOrders, loading } = useLoadLatestOrders(userID);

  return (
    <section
      id="orders-container"
      className={`${
        recentOrders.length > 2 ? 'orders-container-overflow' : undefined
      }`}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          {recentOrders.map((order, idx) => (
            <section key={idx} className="recent-order-container">
              Orden Id:{' '}
              <Link to={`/orders?id=${order.orderId}`}>
                {order.orderId.substring(0, 6)}...
              </Link>
              {order.cart.map((item, index) => (
                <div
                  key={index}
                >{`${item.qty} x ${item.name} ${item.category}`}</div>
              ))}
              {order.total !== undefined && (
                <div>Total: $ {order.total.toLocaleString('DE-de') || 0}</div>
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
        </>
      )}
    </section>
  );
};

export default RecentOrders;
