import React, {useState} from "react";
import {Tabs, Tab} from "react-bootstrap"
import "./login.css"
import UserInfoTable from "./UserInfoTable"
import RecentOrders from "./RecentOrders"
import SignOut from "./SignOut"

const LoggedUser = () => {
  const [key, setKey] = useState('home');

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
          <SignOut />
        </Tab>
      </Tabs>
    </section>
  )
};

export default LoggedUser;
