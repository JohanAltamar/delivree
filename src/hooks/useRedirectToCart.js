import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import store from "../redux2/store";

const useRedirectToCart = (param) => {
  const history = useHistory();
  const { products } = store.getState().shoppingCart;
  const userInfoState = store.getState().userInfo;

  useEffect(() => {
    if (products.length === 0) history.push("/cart");

    if (param === "userInfo" && Object.keys(userInfoState).length === 0) {
      history.push("/cart/user-info");
    }
    if (param === "toCheckout" && Object.keys(userInfoState).length > 0) {
      history.push("/cart/checkout");
    }
  }, [history, products, param, userInfoState]);
};

export default useRedirectToCart;
