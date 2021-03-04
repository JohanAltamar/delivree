import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faCartPlus,
  faHome,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";

import statusTranslations from "../../utils/orderStatusTranslations";
import { useDispatch } from "react-redux";
import { startRepeatOrderCartAction } from "../../redux2/actions/cartActions";

const OrderInfo = ({ orderInfo, userDashboard = false }) => {
  const dispatch = useDispatch();

  const whatsappMessage = `Quiero información sobre la orden ${orderInfo.orderID}`;
  const whatsappNumber = 573016669240;

  const date = new Date(orderInfo.createdAt?.seconds * 1000).toLocaleString(
    "es-CO"
  );

  const handleRepeatOrderClick = () => {
    dispatch(startRepeatOrderCartAction(orderInfo.products));
  };

  return (
    <section
      className={`orders__info-container ${userDashboard ? "mb-5" : ""}`}
    >
      <p>
        <span>ID del pedido: </span>
        <span>{orderInfo.orderID}</span>
      </p>
      <p>
        <span>Creado: </span>
        <span>{date}</span>
      </p>
      {!userDashboard && (
        <>
          <p>
            <span>Cliente: </span>
            <span>{orderInfo.fullname}</span>
          </p>
          <p>
            <span>Dirección: </span>
            <span>{orderInfo.address}</span>
          </p>
        </>
      )}
      <p>
        <span>Estado: </span>
        <span>{statusTranslations[orderInfo.status]}</span>
      </p>
      <span className="orders__info-products">
        <span>Productos: </span>
        <ul>
          {orderInfo.products.map((item) => (
            <li key={item.id}>
              x {item.qty} {item.name} - {item.categoryName}: ${" "}
              {(item.price * item.qty).toLocaleString("de-DE")}
            </li>
          ))}
        </ul>
      </span>
      <p>
        <span>Domicilio: </span>
        <span>$ {orderInfo.deliveryTotal.toLocaleString("de-DE")}</span>
      </p>
      <p>
        <span>Total: </span>
        <span>$ {orderInfo.total.toLocaleString("de-DE")}</span>
      </p>
      {!userDashboard && (
        <>
          <p>
            <span>Forma de pago: </span>
            <span>
              {orderInfo.paymentMethod === "cash"
                ? "Efectivo"
                : orderInfo.paymentMethod}
            </span>
          </p>
          {orderInfo.paymentMethod !== "cash" && (
            <p>
              <span>Pago confirmado: </span>
              <span>{orderInfo.paymentConfirmed ? "Sí" : "No"}</span>
            </p>
          )}
        </>
      )}
      <div className="orders__info-buttons">
        {userDashboard && (
          <>
            <button
              className="btn btn-default"
              onClick={handleRepeatOrderClick}
            >
              <FontAwesomeIcon icon={faCartPlus} /> Repetir
            </button>
            <Link
              to={`/orders/${orderInfo.orderID}`}
              className="btn btn-outline-default"
            >
              <FontAwesomeIcon icon={faSearchPlus} />
              Detalles
            </Link>
          </>
        )}
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
        {!userDashboard && (
          <Link to="/" className="btn btn-outline-error">
            <FontAwesomeIcon icon={faHome} />
            Volver al inicio
          </Link>
        )}
      </div>
    </section>
  );
};

export default OrderInfo;

OrderInfo.propTypes = {
  orderInfo: PropTypes.object.isRequired,
  userDashboard: PropTypes.bool,
};
