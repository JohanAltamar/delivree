import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { updateProductInCart } from "../redux/actions";
import { auth } from "../services/firebase";
import {developmentLog} from "../services/functions";

export const ShoppingCart = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cart);

  const getTotal = (total, product) => {
    return total + product.qty * product.price;
  };
  const total = cart.reduce(getTotal, 0);

  const orderNow = () => {
    developmentLog("Enviando orden ...")
    if (auth.currentUser) {

      developmentLog(`User logged: ${auth.currentUser.uid}`);
      history.push(`/cart/confirmData/${auth.currentUser.uid}`);
    } else {
      developmentLog("No user logged.");
      history.push(`/cart/chooseUser`);
    }
  };

  return (
    <section id="cart-container" className="brand-font-family brand-color-main">
      <Helmet>
        <title>Foodies restaurant - Cart resume</title>
        <meta
          name="description"
          content="Foodies cart lets you edit your order before confirm it."
        />
      </Helmet>
      <h3 className="text-center">Resume</h3>
      <section id="cart-products">
        {cart.map((item, idx) => (
          <div className="cart-item" key={idx}>
            <div className="cart-item-content">
              <h5>
                <strong>{item.name}</strong>
              </h5>
              <div id="cart-item-content-second-section">
                <div id="cart-item-buttons">
                  <button
                    className="less-button"
                    onClick={() => dispatch(updateProductInCart(idx, "less"))}
                  >
                    -
                  </button>
                  <input value={item.qty} disabled />
                  <button
                    className="add-button"
                    onClick={() => dispatch(updateProductInCart(idx, "add"))}
                  >
                    +
                  </button>
                </div>
                <div id="cart-item-price">
                  $ {item.price.toLocaleString("de-DE") || item.price}
                </div>
              </div>
              <div id="cart-item-total-section">
                <h5>
                  <strong>Total </strong>
                  <strong>
                    $
                    {(item.price * item.qty).toLocaleString("de-DE") ||
                      item.price * item.qty}
                  </strong>
                </h5>
              </div>
            </div>
            <div className="cart-item-image">
              <img src={item.url} alt={item.name} />
            </div>
          </div>
        ))}
      </section>
      {cart.length > 0 ? (
        <div>
          <section id="cart-resume">
            <div id="cart-resume-preview">
              <h5>
                <strong>Preview: </strong>{" "}
              </h5>
              <h5>$ {total.toLocaleString("de-DE")}</h5>
            </div>
            <div id="cart-resume-delivery">
              <h5>
                <strong>Delivery: </strong>
              </h5>
              <h5>$ 5.000</h5>
            </div>
            <div id="cart-resume-total">
              <h5>
                <strong>Total: </strong>
              </h5>
              <h5> $ {(total + 5000).toLocaleString("de-DE")}</h5>
            </div>
          </section>
          <div id="order-now-container">
            <button id="order-now" onClick={orderNow}>
              Order Now
            </button>
          </div>
        </div>
      ) : (
        <section id="cart-empty">
          No hay productos agregados. Visita nuestro{" "}
          <Link to="/menu">Menu</Link>
        </section>
      )}
    </section>
  );
};

export default ShoppingCart;
