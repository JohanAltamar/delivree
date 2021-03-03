import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { firebase } from "../services/firebase";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import MenuCategoriesPage from "../pages/MenuPage";
import MenuCategoryPage from "../pages/MenuPage/CategoryPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import SetUserInfoPage from "../pages/ShoppingCartPage/SetUserInfoPage";
import CheckoutPage from "../pages/ShoppingCartPage/CheckoutPage";
import OrdersPage from "../pages/OrdersPage";
import SelectedOrderpage from "../pages/OrdersPage/SelectedOrderpage";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/RegisterPage";
import RecoverPage from "../pages/RecoverPage";
import ProfilePage from "../pages/ProfilePage";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

import {
  startLoaderAction,
  stopLoaderAction,
} from "../redux2/actions/uiActions";
import { startFecthUserInfoAction } from "../redux2/actions/userActions";

const AppRouter = () => {
  const dispatch = useDispatch();

  const { logged } = useSelector((state) => state.userInfo);
  const { loading } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(startLoaderAction());
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(startFecthUserInfoAction(user.uid));
      }
    });
  }, [dispatch]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

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
          <Route path="/cart/checkout" component={CheckoutPage} />

          <Route exact path="/orders" component={OrdersPage} />
          <Route path="/orders/:orderID" component={SelectedOrderpage} />

          <PublicRoute
            exact
            path="/login"
            component={LoginPage}
            isAuthenticated={logged}
          />
          <PublicRoute
            exact
            path="/register"
            component={RegisterPage}
            isAuthenticated={logged}
          />
          <PublicRoute
            exact
            path="/recover-password"
            component={RecoverPage}
            isAuthenticated={logged}
          />

          <PrivateRoute
            path="/dashboard"
            component={ProfilePage}
            isAuthenticated={logged}
          />

          {/* <Route path="/cart/transactionStatus" component={TransactionStatus} />
          <Route path="/cart/confirmData/:userID" component={ConfirmData} />


          <Route path="/login/:loggedUserUid" component={LoggedUser} />
          <Route path="*" component={NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
