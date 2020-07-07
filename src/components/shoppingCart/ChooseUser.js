import React, {useEffect} from "react";
import {Button} from "react-bootstrap"
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../redux/actions";
import Login from "../Login"
import GuestModal from "./ChooseUserGuestModal";

const ChooseUser = () => {
  const guestModalStatus = useSelector(state => state.shoppingCart.guestInfoModalStatus)
  const loggedUser = useSelector(state => state.user.loggedUser.uid)
  const dispatch = useDispatch();

  return(
    <section id="choose-user-container" className="brand-font-family">
      <div>
        <Login loginButton="Seguir como miembro" redirectTo={`/cart/confirmData`} />
      </div>
      <hr/>
      <div id="checkout-as-guest">
       <h6 className="brand-color-main">Deseo continuar como invitado.</h6>
       <p>Le pediremos sus datos de contacto para hacerle llegar el pedido</p>
       <Button
        variant="secondary"
        onClick={() => dispatch(actions.guestCheckoutModalStatus(true))}
      >
        Seguir como invitado
      </Button>
      </div>
      <GuestModal
        show={guestModalStatus}
        onHide={() => dispatch(actions.guestCheckoutModalStatus(false))}
      />
    </section>
  )
}

export default ChooseUser
