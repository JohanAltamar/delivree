import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { guestCheckoutModalStatus } from '../../redux/actions';
import Login from '../Login';
import GuestModal from './ChooseUserGuestModal';
import './shoppingCart.css';

const ChooseUser = () => {
  const guestModalStatus = useSelector(
    (state) => state.shoppingCart.guestInfoModalStatus
  );
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(guestCheckoutModalStatus(false));
    };
  }, [dispatch]);

  return (
    <section id="choose-user-container" className="brand-font-family">
      <>
        <Login
          loginButton="Seguir como miembro"
          redirectTo={`/cart/confirmData`}
        />
      </>
      <hr />
      <div id="checkout-as-guest">
        <h6 className="brand-color-main">Deseo continuar como invitado.</h6>
        <p>Le pediremos sus datos de contacto para hacerle llegar el pedido</p>
        <Button
          variant="secondary"
          onClick={() => dispatch(guestCheckoutModalStatus(true))}
        >
          Seguir como invitado
        </Button>
      </div>
      <GuestModal
        show={guestModalStatus}
        onHide={() => dispatch(guestCheckoutModalStatus(false))}
      />
    </section>
  );
};

export default ChooseUser;
