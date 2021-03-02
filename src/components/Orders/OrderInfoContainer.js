import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { startFecthOrderInfoAction } from "../../redux2/actions/ordersInfoAction";

const OrderInfoContainer = () => {
  const { params } = useRouteMatch();
  const { orderID } = params;

  const whatsappMessage = `Quiero información sobre la orden ${orderID}`;
  const whatsappNumber = 573016669240;

  const dispatch = useDispatch();

  const ordersInfo = useSelector((state) => state.ordersInfo);

  useEffect(() => {
    if (orderID) {
      dispatch(startFecthOrderInfoAction(orderID));
    }
  }, [orderID, dispatch]);

  return Object.keys(ordersInfo).length > 2 ? ( //error and id are fixed
    <section className="orders__info-container">
      <p>
        <span>ID del pedido: </span>
        <span>{ordersInfo.id}</span>
      </p>
      <p>
        <span>Cliente: </span>
        <span>{ordersInfo.fullname}</span>
      </p>
      <p>
        <span>Dirección: </span>
        <span>{ordersInfo.address}</span>
      </p>
      <p>
        <span>Estado: </span>
        <span>{ordersInfo.status}</span>
      </p>
      <span className="orders__info-products">
        <span>Productos: </span>
        <ul>
          {ordersInfo.products.map((item) => (
            <li>
              x {item.qty} {item.name} - {item.categoryName}: ${" "}
              {(item.price * item.qty).toLocaleString("de-DE")}
            </li>
          ))}
        </ul>
      </span>
      <p>
        <span>Domicilio: </span>
        <span>$ {ordersInfo.deliveryTotal.toLocaleString("de-DE")}</span>
      </p>
      <p>
        <span>Total: </span>
        <span>$ {ordersInfo.total.toLocaleString("de-DE")}</span>
      </p>
      <p>
        <span>Forma de pago: </span>
        <span>
          {ordersInfo.paymentMethod === "cash"
            ? "Efectivo"
            : ordersInfo.paymentMethod}
        </span>
      </p>
      {ordersInfo.paymentMethod !== "cash" && (
        <p>
          <span>Pago confirmado: </span>
          <span>{ordersInfo.paymentConfirmed ? "Sí" : "No"}</span>
        </p>
      )}
      <div className="orders__info-buttons">
        <a
          className="btn btn-outline-success"
          href={`https://wa.me/${whatsappNumber}?text=${encodeURI(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
          Escríbenos
        </a>
        <Link to="/" className="btn btn-outline-error">
          <FontAwesomeIcon icon={faHome} />
          Volver al inicio
        </Link>
      </div>
    </section>
  ) : (
    <h6 className="text-center mt-5">
      No fue encontrada la orden <b>{orderID}</b>. Verifica y vuelve a
      intentarlo
    </h6>
  );
};

export default OrderInfoContainer;
