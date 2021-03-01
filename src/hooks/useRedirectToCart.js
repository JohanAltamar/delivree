import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import store from "../redux2/store";

const useRedirectToCart = (userInfo) => {
  const history = useHistory();
  const { products } = store.getState().shoppingCart;
  const userInfoState = store.getState().userInfo;

  useEffect(() => {
    if (products.length === 0) history.push("/cart");

    if (userInfo && Object.keys(userInfoState).length === 0) {
      history.push("/cart/user-info");
    }
  }, [history, products, userInfo, userInfoState]);
};

export default useRedirectToCart;
