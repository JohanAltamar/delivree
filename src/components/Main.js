import React, {lazy, Suspense} from "react";
import { Switch, Route } from "react-router-dom";
const Home = lazy(() => import ("./Home"));
const Menu = lazy(() => import ("./Menu"));
const MenuCategory = lazy(() => import ("./menu/Categories"));
const ShoppingCart = lazy(() => import ("./ShoppingCart"));
const ChooseUser = lazy(() => import ("./shoppingCart/ChooseUser"));
const ConfirmData = lazy(() => import ("./shoppingCart/ConfirmData"));
const Checkout = lazy(() => import ("./shoppingCart/Checkout"));
const TransactionStatus = lazy(() => import ("./shoppingCart/TransactionStatus"));
const Login = lazy(() => import ("./Login"));
const LoggedUser = lazy(() => import ("./login/LoggedUser"));
const Signup = lazy(() => import ("./SignUp"));
const ForgotPassword = lazy(() => import ("./ForgotPassword"));
const NoMatch = lazy(() => import ("./NoMatch"));
const OrderMain = lazy(() => import ("./Order"));

function Main() {
  return (
    <div style={{ marginTop: "80px" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={Menu} />
          <Route path="/menu/:categoryName" component={MenuCategory} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route path="/cart/chooseUser" component={ChooseUser} />
          <Route path="/cart/confirmData/:userID" component={ConfirmData} />
          <Route path="/cart/checkout" component={Checkout} />
          <Route path="/cart/transactionStatus" component={TransactionStatus} />
          <Route path="/orders" component={OrderMain} />
          <Route exact path="/login" component={Login} />
          <Route path="/login/:loggedUserUid" component={LoggedUser}/>
          <Route path="/signup" component={Signup} />
          <Route path="/recover_password" component={ForgotPassword} />
          <Route path="*" component={NoMatch}/>
        </Switch>
      </Suspense>
    </div>
  );
}

export default Main;
