import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Form, Button, Col, InputGroup } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import db from "../services/firebase";
import { faSearch, faHome } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./order/order.css";
import moment from "moment";
import "moment/locale/es";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Order() {
  moment.locale("es");
  const query = useQuery();
  const orderID = query.get("id");
  const history = useHistory();
  const [orderInfo, setOrderInfo] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    if (orderID) {
      const checkOrderNumber = () => {
        db.collection("orders")
          .doc(orderID)
          .onSnapshot(function (doc) {
            if (process.env.NODE_ENV === "development") {
              console.log("Current data: ", doc.data());
            }
            setOrderInfo(doc.data());
          });
      };
      checkOrderNumber();
    }
  }, [orderID]);

  return (
    <section id="order" className="brand-font-family">
      <Helmet>
        <title>Foodies restaurant - Track your order</title>
        <meta
          name="description"
          content="Foodies web app lets you track your order status."
        />
      </Helmet>
      <Form>
        <InputGroup>
          <Form.Control
            type="search"
            placeholder="Ingresa la orden"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
          />
          <InputGroup.Append>
            <Button
              className="font-weight-bold"
              variant="danger"
              onClick={() => history.push(`/orders?id=${orderNumber}`)}
            >
              <span>
                <FontAwesomeIcon icon={faSearch} /> Buscar
              </span>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      {orderInfo ? (
        <section id="order-info-container">
          <h5 className="text-center">Información del pedido</h5>
          <table>
            <tbody>
              <tr id="order-id-row">
                <th>Id</th>
                <td>{orderID}</td>
              </tr>
              <tr id="order-name-row">
                <th>Cliente</th>
                <td>{orderInfo.userInfo.fullname}</td>
              </tr>
              <tr id="order-address-row">
                <th>Dirección</th>
                <td>{orderInfo.userInfo.address}</td>
              </tr>
              <tr id="order-date-row">
                <th>Creado</th>
                <td>
                  {moment(orderInfo.timestamp).format("DD/MM/YYYY, HH:mm")}
                </td>
              </tr>
              <tr id="order-cart-row">
                <th>Pedido</th>
                <td>
                  {orderInfo.cart.map((item, idx) => (
                    <div key={idx}>
                      {`${item.qty} x ${item.name} ${item.category}`}
                    </div>
                  ))}
                </td>
              </tr>
              <tr id="order-payment-method-row">
                <th>Pago con</th>
                <td>
                  {orderInfo.paymentMethod === "cash" ? "Efectivo" : "Online"}
                </td>
              </tr>
              {orderInfo.paymentMethod === "online" && (
                <tr id="order-payment-status-row">
                  <th>Pago</th>
                  <td>{orderInfo.paymentStatus}</td>
                </tr>
              )}
              {orderInfo.paymentMethod === "online" && (
                <tr id="order-payment-type-row">
                  <th>Medio</th>
                  <td>{orderInfo.payment_method_type}</td>
                </tr>
              )}
              {orderInfo.total && (
                <tr id="order-total-row">
                  <th>Total</th>
                  <td>$ {orderInfo.total.toLocaleString("de-DE")}</td>
                </tr>
              )}
              <tr id="order-status-row">
                <th>Estado</th>
                <td>{orderInfo.status}</td>
              </tr>
            </tbody>
          </table>
          <div id="order-button-container">
            <a
              target="_blank"
              href={`https://wa.me/573016669240?text=Quiero%20obtener%20informacion%20sobre%20la%20orden%20${orderID}`}
            >
              <Button variant="outline-success" id="whatsapp-button">
                <FontAwesomeIcon icon={faWhatsapp} /> Escríbenos
              </Button>
            </a>
            <Button variant="outline-danger" onClick={() => history.push("/")}>
              <FontAwesomeIcon icon={faHome} /> Volver a inicio
            </Button>
          </div>
        </section>
      ) : (
        <div id="no-order-selected">
          <h6>No hay alguna orden en seguimiento</h6>
        </div>
      )}
    </section>
  );
}

export default Order;
