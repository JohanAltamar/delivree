import React from "react";
// import {useParams} from "react-router-dom";
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
  // let {loggedUserUid} = useParams();

  const userLogged = useSelector(state => state.userIsLogged);
  // const userInfo = useSelector(state => state.loggedUser);
  const dispatch = useDispatch();

  const logOut = () => {
      auth.signOut().then(function () {
      // Sign-out successful.
      // console.log('Signin Out');
      dispatch(userIsLogged(false));
      // setUser(false)
    }).catch(function (error) {
      // An error happened.
    });
  }

  return(
    <section id="logged-user-container" className="brand-font-family">
      {/*// User logged is {loggedUserUid}*/}
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
