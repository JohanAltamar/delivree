import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import store from "../redux2/store";

const useRedirectToCart = () => {
  const history = useHistory();
  const { products } = store.getState().shoppingCart;

  useEffect(() => {
    if (products.length === 0) history.push("/cart");
  }, [history, products]);
};

export default useRedirectToCart;
