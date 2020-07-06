import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import db from "../../services/firebase";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const TransactionStatus = () => {
  let query = useQuery();
  let history = useHistory();

  const orderSent = useSelector((state) => state.shoppingCart.orderSent);
  const order = useSelector((state) => state.shoppingCart.order);
  const orderID = useSelector((state) => state.shoppingCart.orderID);
  const paymentMethod = useSelector(
    (state) => state.shoppingCart.order.paymentMethod
  );
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const [status, setStatus] = useState(false);

  useEffect(() => {
    const checkTransactionStatus = async () => {
      const id = query.get("id");
      const result = await axios.get(
        `https://sandbox.wompi.co/v1/transactions/${id}`
      );
      console.log(result.data.data);
      setStatus(result.data.data);
    };
    checkTransactionStatus();
  }, []);

  useEffect(() => {
    if(cart.length === 0){
      return history.push("/");
    }
    if (status) {
      if (status.status === "APPROVED") {
        dispatch(
          actions.completeOrder({
            // delivery: delivery,
            payment_method_type: status.payment_method_type,
            reference: status.reference,
            paymentID: status.id,
            paymentStatus: status.status,
            total: status.amount_in_cents / 100,
          })
        );
      }
    }
  }, [status]);

  useEffect(() => {
    if (paymentMethod === "online" && orderSent && cart.length > 0) {
      // console.log(order);
      db.collection("orders")
        .add(order)
        .then(function (docRef) {
          // console.log("Document written with ID: ", docRef.id);
          dispatch(actions.orderID(docRef.id));
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
      dispatch(actions.orderSent(false));
    }
  }, [order]);

  const handleFollowOrderStatus = () => {
    dispatch(actions.emptyCart());
    history.push(`/orders?id=${orderID}`);
  };
  return (
    <div className="brand-font-family" id="transaction-status-container">
      <h5>Transacción finalizada.</h5>
      <table>
        <tbody>
          <tr>
            <th>Referencia:</th>
            {status && <td>{status.reference}</td>}
          </tr>
          <tr>
            <th>Pagado por:</th>
            {status && (
              <td>
                {status.payment_method_type === "CARD"
                  ? status.payment_method.extra.brand
                  : status.payment_method_type}
              </td>
            )}
          </tr>
          <tr>
            <th>Estado</th>
            {status && <td>{status.status && status.status}</td>}
          </tr>
          <tr>
            <th>Total Pagado</th>
            {status && (
              <td>
                $ {(status.amount_in_cents / 100).toLocaleString("de-DE")}
              </td>
            )}
          </tr>
        </tbody>
      </table>
      <div
        id="redirect-buttons"
        className="d-flex flex-column"
        style={{ padding: "0 8.33%" }}
      >
        <Button variant="warning" onClick={handleFollowOrderStatus}>
          Seguimiento del pedido
        </Button>
        <Button variant="danger" onClick={() => history.push("/")}>
          Volver a Inicio
        </Button>
      </div>
    </div>
  );
};

export default TransactionStatus;
