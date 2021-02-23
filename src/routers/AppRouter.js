import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <Router >
      <div className="grid__container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />

          {/* <Route exact path="/menu" component={Menu} />
          <Route path="/menu/:categoryName" component={MenuCategory} />

          <Route exact path="/cart" component={ShoppingCart} />
          <Route path="/cart/chooseUser" component={ChooseUser} />
          <Route path="/cart/confirmData/:userID" component={ConfirmData} />
          <Route path="/cart/checkout" component={Checkout} />
          <Route path="/cart/transactionStatus" component={TransactionStatus} />

          <Route path="/orders" component={OrderMain} />

          <Route exact path="/login" component={Login} />
          <Route path="/login/:loggedUserUid" component={LoggedUser} />
          <Route path="/signup" component={Signup} />
          <Route path="/recover_password" component={ForgotPassword} />
          <Route path="*" component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
