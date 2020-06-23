import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import MenuCategory from "./menu/Categories";
import ShoppingCart from "./ShoppingCart";
import ChooseUser from "./shoppingCart/ChooseUser"
import Login from "./Login";
import LoggedUser from "./login/LoggedUser";
import Signup from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import NoMatch from "./NoMatch"
import OrderMain from "./Order"

function Main() {
  return (
    <div style={{ marginTop: "80px" }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route path="/menu/:categoryName" component={MenuCategory} />
        <Route exact path="/cart" component={ShoppingCart} />
        <Route path="/cart/chooseUser" component={ChooseUser} />        
        <Route path="/order" component={OrderMain} />
        <Route exact path="/login" component={Login} />
        <Route path="/login/:loggedUserUid" component={LoggedUser}/>
        <Route path="/signup" component={Signup} />
        <Route path="/recover_password" component={ForgotPassword} />
        <Route path="*" component={NoMatch}/>
      </Switch>
    </div>
  );
}

export default Main;
