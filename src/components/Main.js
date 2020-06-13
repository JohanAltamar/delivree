import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import MenuCategory from "./menu/Categories";
import ShoppingCart from "./ShoppingCart";
import Login from "./Login";
import Signup from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import NoMatch from "./NoMatch"

function Main() {
  return (
    <div style={{ marginTop: "80px" }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route path="/menu/:categoryName" component={MenuCategory} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/recover_password" component={ForgotPassword} />
        <Route path="*" component={NoMatch}/>
      </Switch>
    </div>
  );
}

export default Main;
