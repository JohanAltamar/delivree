import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductInCart, removeFromCart } from '../redux/actions';
import { auth } from '../services/firebase';
import { developmentLog } from '../services/functions';
import { removePlural } from '../helpers/removePlural';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './shoppingCart/shoppingCart.css';
import Footer from './Footer';

export const ShoppingCart = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.shoppingCart.cart);

  const getTotal = (total, product) => {
    return total + product.qty * product.price;
  };
  const total = cart.reduce(getTotal, 0);

  const orderNow = () => {
    developmentLog('Enviando orden ...');
    if (auth.currentUser) {
      developmentLog(`User logged: ${auth.currentUser.uid}`);
      history.push(`/cart/confirmData/${auth.currentUser.uid}`);
    } else {
      developmentLog('No user logged.');
      history.push(`/cart/chooseUser`);
    }
  };

  return (
    <>
      <section
        id="cart-container"
        className="brand-font-family brand-color-main"
      >
        <Helmet>
          <title>Delivree App - Cart resume</title>
          <meta
            name="description"
            content="Delivree cart lets you edit your order before confirm it."
          />
        </Helmet>
        <h3 className="text-center section-title">Resume</h3>
        <section id="cart-products">
          {cart.map((item, idx) => (
            <div className="cart-item" key={idx}>
              <h5 className="card-item-title">
                {item.name} {removePlural(item.category)}{' '}
                <span onClick={() => dispatch(removeFromCart(item))}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </span>
              </h5>
              <div className="cart-item-content">
                <div className="card-item-content-details">
                  <div className="cart-item-buttons">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => dispatch(updateProductInCart(idx, 'less'))}
                    >
                      -
                    </button>
                    <input
                      className="form-control form-control-sm"
                      value={item.qty}
                      disabled
                    />
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => dispatch(updateProductInCart(idx, 'add'))}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-price">
                    <span className="price-label">Unit Price</span>${' '}
                    {item.price.toLocaleString('de-DE') || item.price}
                  </div>
                  <div className="cart-item-total-section">
                    <h5>
                      Total
                      <span>
                        $
                        {(item.price * item.qty).toLocaleString('de-DE') ||
                          item.price * item.qty}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="cart-item-image">
                  <img src={item.url} alt={item.name} />
                </div>
              </div>
            </div>
          ))}
        </section>
        {cart.length > 0 ? (
          <>
            <section id="cart-resume">
              <div id="cart-resume-preview">
                <h5>
                  <strong>Preview: </strong>{' '}
                </h5>
                <h5>$ {total.toLocaleString('de-DE')}</h5>
              </div>
            </section>
            <div id="order-now-container">
              <button id="order-now" onClick={orderNow}>
                Order Now
              </button>
            </div>
          </>
        ) : (
          <section id="cart-empty">
            No hay productos agregados. Visita nuestro{' '}
            <Link to="/menu">Menu</Link>
          </section>
        )}
      </section>
      <Footer style={{ position: 'absolute', bottom: '0px', width: '100%' }} />
    </>
  );
};

export default ShoppingCart;
