import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import DeleteOrderModal from "./DeleteOrderCheckoutModal";
import CompletedOrderModal from "./CompleteOrderModal";
import db, { auth } from "../../services/firebase";
import {developmentLog} from "../../services/functions";

const Checkout = () => {
  let history = useHistory();
  var date = new Date();

  const [updateOrdersInProfile, setUpdateOrdersInProfile] = useState(false);

  const dispatch = useDispatch();
  const loggedUserOrders = useSelector((state) => state.user.loggedUser.orders);
  const cart = useSelector((state) => state.shoppingCart.cart);
  const order = useSelector((state) => state.shoppingCart.order);
  const orderSent = useSelector((state) => state.shoppingCart.orderSent);
  const completedOrderModalStatus = useSelector(
    (state) => state.shoppingCart.completedOrderModalStatus
  );
  const deleteModalStatus = useSelector(
    (state) => state.shoppingCart.deleteOrderModalStatus
  );
  const paymentMethod = useSelector(
    (state) => state.shoppingCart.order.paymentMethod
  );
  const orderID = useSelector((state) => state.shoppingCart.orderID);

  const getTotal = (total, product) => {
    return total + product.qty * product.price;
  };
  const delivery = order.delivery;
  const total = cart.reduce(getTotal, 0) + delivery;

  const handleCompleteOrder = () => {
    dispatch(actions.completeOrder({ delivery, total }));
  };

  const handleDeleteOrder = () => {
    dispatch(actions.emptyCart());
    history.push("/");
  };

  const handleFollowOrderStatus = () => {
    dispatch(actions.emptyCart());
    history.push(`/orders?id=${orderID}`);
  };

  const addOrder2customerProfile = (orderInfo, orderId) => {
    if (auth.currentUser) {
      const newOrder = { ...orderInfo, orderId };
      dispatch(actions.addOrderToProfile(newOrder));
      setUpdateOrdersInProfile(true);
    }
  };
  useEffect(() => {
    return () => {
      dispatch(actions.deleteOrderModalStatus(false));
    };
  }, [dispatch]);

  useEffect(() => {
    if (paymentMethod === "cash" && orderSent && cart.length > 0) {
      // console.log(order);
      db.collection("orders")
        .add(order)
        .then(function (docRef) {
          // console.log("Document written with ID: ", docRef.id);
          const { id } = docRef;
          dispatch(actions.orderID(id));
          addOrder2customerProfile(order, id);
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
      dispatch(actions.orderSent(false));
    }
    // eslint-disable-next-line
  }, [order]);

  useEffect(() => {
    if (cart.length === 0) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, [cart]);

  useEffect(() => {
    const updateOrders = () => {
      if (updateOrdersInProfile && auth.currentUser) {
        const userRef = db.collection("users").doc(auth.currentUser.uid);
        userRef
          .update({
            orders: loggedUserOrders,
          })
          .then(function () {
            developmentLog("Order added to customer profile.");
          });
        setUpdateOrdersInProfile(false);
      }
    };
    updateOrders();
    // eslint-disable-next-line
  }, [updateOrdersInProfile]);

  return (
    <section className="brand-font-family" id="checkout-container">
      <h5 className="text-center">Finaliza tu pedido</h5>
      <section id="cart-resume-checkout">
        <div id="cart-resume-preview">
          <h6>Subtotal:</h6>
          <h6>$ {(total - delivery).toLocaleString("de-DE")}</h6>
        </div>
        <div id="cart-resume-delivery">
          <h6>Delivery:</h6>
          <h6>$ {delivery.toLocaleString("de-DE")}</h6>
        </div>
        <div id="cart-resume-total">
          <h4>
            <strong>Total: </strong>
          </h4>
          <h4> $ {total.toLocaleString("de-DE")}</h4>
        </div>
      </section>
      <Form id="checkout-form">
        <Form.Label>Selecciona medio de pago</Form.Label>
        <Form.Control
          as="select"
          className="mr-sm-2"
          custom
          value={paymentMethod}
          onChange={(event) =>
            dispatch(actions.checkoutPaymentMethod(event.target.value))
          }
        >
          <option value="cash">Efectivo</option>
          <option value="online">En línea</option>
        </Form.Control>
      </Form>
      <div className="d-flex align-items-center justify-content-center">
        {paymentMethod === "online" ? (
          <form action={process.env.REACT_APP_WOMPI_PAYMENT_URL} method="GET">
            <input
              type="hidden"
              name="public-key"
              value={process.env.REACT_APP_WOMPI_PUBLIC_TEST_KEY}
            />
            <input type="hidden" name="currency" value="COP" />
            <input type="hidden" name="amount-in-cents" value={total * 100} />
            <input type="hidden" name="reference" value={date.getTime()} />
            <input
              type="hidden"
              name="redirect-url"
              value="http://192.168.1.102:3000/cart/transactionStatus"
            />
            <Button variant="warning" size="lg" type="submit">
              Pagar online
            </Button>
          </form>
        ) : (
          <Button variant="warning" size="lg" onClick={handleCompleteOrder}>
            Finalizar Pedido
          </Button>
        )}
      </div>
      <div id="checkout-button-container">
        <Button
          variant="outline-danger"
          onClick={() => dispatch(actions.deleteOrderModalStatus(true))}
        >
          Descartar Orden
        </Button>
      </div>
      <CompletedOrderModal
        show={completedOrderModalStatus}
        onHide={() => dispatch(actions.completedOrderModalStatus(false))}
        onEscapeKeyDown={() => {
          history.push("/");
          handleDeleteOrder();
        }}
        followOrderStatus={handleFollowOrderStatus}
      />
      <DeleteOrderModal
        show={deleteModalStatus}
        onHide={() => dispatch(actions.deleteOrderModalStatus(false))}
        onDelete={handleDeleteOrder}
      />
    </section>
  );
};

export default Checkout;
