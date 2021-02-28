import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import MenuCategoriesPage from "../pages/MenuPage";
import MenuCategoryPage from "../pages/MenuPage/CategoryPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import SetUserInfoPage from "../pages/ShoppingCartPage/SetUserInfoPage";

const AppRouter = () => {
  return (
    <Router>
      <div className="grid__container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/menu" component={MenuCategoriesPage} />
          <Route path="/menu/:categoryName" component={MenuCategoryPage} />

          <Route exact path="/cart" component={ShoppingCartPage} />
          <Route path="/cart/user-info" component={SetUserInfoPage} />
          {/* <Route path="/cart/confirmData/:userID" component={ConfirmData} />
          <Route path="/cart/checkout" component={Checkout} />
          <Route path="/cart/transactionStatus" component={TransactionStatus} />

          <Route path="/orders" component={OrderMain} />

          <Route exact path="/login" component={Login} />
          <Route path="/login/:loggedUserUid" component={LoggedUser} />
          <Route path="/signup" component={Signup} />
          <Route path="/recover_password" component={ForgotPassword} />
          <Route path="*" component={NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
