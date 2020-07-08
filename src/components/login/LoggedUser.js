import React, {useState} from "react";
import {auth} from "../../services/firebase";
import {Redirect} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {userIsLogged} from "../../redux/actions";
import {Tabs, Tab, Button} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./login.css"
import UserInfoTable from "./UserInfoTable"
import RecentOrders from "./RecentOrders"

const LoggedUser = () => {
  const [key, setKey] = useState('home');
  const userLogged = useSelector(state => state.user.userIsLogged);
  const dispatch = useDispatch();

  const logOut = () => {
      auth.signOut().then(function () {
      dispatch(userIsLogged(false));
    }).catch(function (error) {
    });
  }

  return(
    <section id="logged-user-container" className="brand-font-family">
      <Tabs 
        activeKey={key}
        onSelect={(k) => setKey(k)}
        unmountOnExit
      >
        <Tab eventKey="home" title="Inicio">
          <RecentOrders />
        </Tab>
        <Tab eventKey="profile" title="Perfil">
          <UserInfoTable/>
        </Tab>
        <Tab eventKey="signOut" title={'Salir'} id="signOutTab">
          {key==="signOut" && logOut()}
        </Tab>
      </Tabs>
      {/* <div>
        <Button onClick={logOut} variant="outline-primary">Cerrar Sesión   <FontAwesomeIcon icon={faSignOutAlt}/></Button>
      </div> */}
      {!userLogged && <Redirect to="/login"/>}
    </section>
  )
};

export default LoggedUser;
