import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";
import { useOrderInfo } from "../hooks/useOrderInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./order/order.css";

function Order() {
  const history = useHistory();
  const [orderNumber, setOrderNumber] = useState("");
  const { orderInfo, loading, orderID } = useOrderInfo();

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
              disabled={orderNumber.length < 10}
            >
              <span>
                <FontAwesomeIcon icon={faSearch} /> Buscar
              </span>
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
      {orderInfo && !loading && (
        <section id="order-info-container">
          <h5 className="text-center">Información del pedido</h5>
          <div id="order-table-container">
            <table>
              <tbody>
                <tr id="order-id-row">
                  <th>Id</th>
                  <td>{orderInfo.id}</td>
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
                  <td>{new Date(orderInfo.timestamp).toLocaleString()}</td>
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
          </div>
          <div id="order-button-container">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://wa.me/573016669240?text=Quiero%20obtener%20informacion%20sobre%20la%20orden%20${orderInfo.id}`}
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
      )}
      {loading && orderID && <Loading />}
      {orderID === null && (
        <div id="no-order-selected">
          <h6>No hay alguna orden en seguimiento</h6>
        </div>
      )}
    </section>
  );
}

export default Order;
