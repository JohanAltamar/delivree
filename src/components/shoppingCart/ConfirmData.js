import React from "react";
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
  const loggedUser = useSelector(state => state.user.loggedUser);
  const guestInfo = useSelector(state => state.user.guestCheckoutInfo);

  const confirmData = () => {
    dispatch(actions.confirmCustomerData(userID))
    history.push("/cart/checkout")
  }

  const editData = () => {
    dispatch(actions.updateUserInfo('all', userID === "guest" ? guestInfo : loggedUser.information))
    dispatch(actions.updateUserInfoModalStatus(true))
  }

  const cancelConfirmData = () => {
    if(auth.currentUser){
      auth.signOut()
      .then(function () {
        dispatch(actions.userIsLogged(false));
      })
      .catch(function (error) {
        console.log(error.code, error.message)
      });
    }
    history.push("/cart")
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
        <Button
          variant="outline-warning"
          onClick={editData}
        >
          Editar
        </Button>
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
