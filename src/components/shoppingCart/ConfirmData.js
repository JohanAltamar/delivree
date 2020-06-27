import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useHistory, Redirect} from "react-router-dom";
import * as actions from "../../redux/actions";
import UserInfo from "../login/UserInfoTable"
import {auth} from "../../services/firebase"

const ConfirmData = () => {
  const {userID} = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const loggedUser = useSelector(state => state.loggedUser);

  useEffect(() => {
    dispatch(actions.chooseCartUserTrigger(false))
    dispatch(actions.guestCheckoutModalStatus(false))
  },[dispatch])

  const confirmData = () => {
    history.push("/cart/checkout")
    dispatch(actions.confirmCustomerData(userID === "guest" ? "guest" : "loggedUser"))
  }

  const cancelConfirmData = () => {
    auth.signOut()
    .then(function () {
      dispatch(actions.userIsLogged(false));
      history.push("/cart")
    })
    .catch(function (error) {
      console.log(error.code, error.message)
    });
  }
  return(
    <div id="confirm-data-container" className="brand-font-family">
      <h5>Confirma los datos ingresados </h5>
      {(userID !== loggedUser.uid && userID !== "guest") && (<Redirect to="/cart"/>)}
      <UserInfo guest={userID === "guest" ? true : false}/>
      <div id="control-buttons">
        <Button
          variant="outline-danger"
          onClick={cancelConfirmData}
        >
          Salir
        </Button>
        <Button variant="outline-warning">Editar </Button>
        <Button
          variant="success"
          onClick={confirmData}
        >
          Confirmar
        </Button>
      </div>

    </div>
  )
}

export default ConfirmData;
