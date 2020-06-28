import React from "react";
import {auth} from "../../services/firebase";
import {Redirect} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {userIsLogged} from "../../redux/actions";
import {Tabs, Tab} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./login.css"
import UserInfoTable from "./UserInfoTable"
import RecentOrders from "./RecentOrders"

const LoggedUser = () => {
  const userLogged = useSelector(state => state.userIsLogged);
  const dispatch = useDispatch();

  const logOut = () => {
      auth.signOut().then(function () {
      dispatch(userIsLogged(false));
    }).catch(function (error) {
    });
  }

  return(
    <section id="logged-user-container" className="brand-font-family">
      <Tabs defaultActiveKey="profile">
        <Tab eventKey="home" title="Inicio">
          <RecentOrders />
        </Tab>
        <Tab eventKey="profile" title="Perfil">
          <UserInfoTable/>
        </Tab>
      </Tabs>
      <div>
        <button onClick={logOut}>Cerrar Sesión   <FontAwesomeIcon icon={faSignOutAlt}/></button>
      </div>
      {!userLogged && <Redirect to="/login"/>}
    </section>
  )
};

export default LoggedUser;
