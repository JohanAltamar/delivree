import React from "react"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"

const RecentOrders = () => {
  const recentOrders = useSelector(state => state.loggedUser.orders) || [];
  console.log(recentOrders)
  return(
    <section id="orders-container">
      {recentOrders.map(order => (
        <div>
          {order.id}
        </div>
      ))}
      {recentOrders.length === 0 ? (
        <div id="no-recent-orders">
          <h6>No hay pedido aún. <Link to="/menu">Comencemos ahora.</Link></h6>
        </div>
      ) : null}
    </section>
  )
}

export default RecentOrders;
