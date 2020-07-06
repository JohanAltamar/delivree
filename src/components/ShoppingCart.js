import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import {Helmet} from "react-helmet"
import { connect, useDispatch, useSelector } from "react-redux";
import {
  addUnit,
  removeUnit,
  orderSent,
  orderSentMsg,
  emptyCart,
  updateProductInCart,
} from "../redux/actions";
import OrderSentMsg from "./shoppingCart/OrderSent";
import {auth} from "../services/firebase"

export const ShoppingCart = (props) => {
  const history = useHistory();
  const { cart, orderSent, orderSentMsg, orderMsg, emptyCart, updateProduct } = props;
  const chooseUserStep = useSelector(state => state.shoppingCart.chooseCartUserTrigger);
  const dispatch = useDispatch();

  const getTotal = (total, product) => {
    return total + product.qty * product.price;
  };
  const total = cart.reduce(getTotal, 0);

  const orderNow = () => {
    // orderMsg(true);
    // orderSent();
    // emptyCart();
    console.log('Enviando orden ...')
    if(auth.currentUser){
      console.log('User logged:', auth.currentUser.uid)
      history.push(`/cart/confirmData/${auth.currentUser.uid}`)
    }else{
      console.log("No user logged.")
      history.push(`/cart/chooseUser`)
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
      <OrderSentMsg show={orderSentMsg} onClose={() => orderMsg(false)} />
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
                  <button className="less-button" onClick={() => updateProduct(idx, 'less')}>
                    -
                  </button>
                  <input value={item.qty} disabled />
                  <button className="add-button" onClick={() => updateProduct(idx, 'add')}>
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

const mapStateToProps = (state) => ({
  cart: state.shoppingCart.cart,
  orderSent: state.shoppingCart.orderSent, 
  orderSentMsg: state.shoppingCart.orderSentMsg,
});

const mapDispatchToProps = (dispatch) => ({
  addUnit() {
    dispatch(addUnit());
  },
  removeUnit() {
    dispatch(removeUnit());
  },
  emptyCart() {
    dispatch(emptyCart());
  },
  orderSent() {
    dispatch(orderSent());
  },
  orderMsg(status) {
    dispatch(orderSentMsg(status));
  },
  updateProduct(index, operation){
    dispatch(updateProductInCart(index, operation))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
