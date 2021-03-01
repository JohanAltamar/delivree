import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import useRedirectToCart from "../../hooks/useRedirectToCart";
import { startResetCartAction } from '../../redux2/actions/cartActions'

const nequiNumber = 3016669240;
const daviplataNumber = 3016669240;


const CheckoutContainer = () => {
  useRedirectToCart("user");
  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState("cash");

  const delivery = 3000;
  const { products } = useSelector((state) => state.shoppingCart);

  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price * currentValue.qty;

  const productsTotal = products.reduce(reducer, 0);

  const handleMethodChange = ({ target }) => {
    setPaymentMethod(target.value);
  };

  const handleFinishOrder = () => {

  }

  const handleDeleteOrder = () => {
    dispatch(startResetCartAction());
  }

  return (
    <section className="cart__checkout-container">
      <h4 className="text-center cart__checkout-title">Finalizar Pedido</h4>
      <p className="cart__checkout-products">
        <span>Productos: </span>
        <span>$ {productsTotal.toLocaleString("de-DE")}</span>
      </p>
      <p className="cart__checkout-delivery">
        <span>Domicilio: </span>
        <span>$ {delivery.toLocaleString("de-DE")}</span>
      </p>
      <p className="cart__checkout-total">
        <span>Total: </span>
        <span>$ {(productsTotal + delivery).toLocaleString("de-DE")}</span>
      </p>

      <select
        className="cart__checkout-select mb-3"
        placeholder="Medio de pago"
        onChange={handleMethodChange}
        value={paymentMethod}
      >
        <option value="cash">Efectivo</option>
        <option value="nequi">Nequi</option>
        <option value="daviplata">Daviplata</option>
      </select>

      {paymentMethod !== "cash" && (
        <>
          <p>Debes realizar la trasnferencia al siguiente número: </p>
          <h3>{paymentMethod === "nequi" && nequiNumber}</h3>
          <h3>{paymentMethod === "daviplata" && daviplataNumber}</h3>
          <p>Y compartirnos el comprobante a nuestro Whatsapp</p>
        </>
      )}

      <button className="btn btn-success mt-4 mb-2" onClick={handleFinishOrder}>
        Finalizar Pedido
      </button>
      <button
        className="btn btn-outline-error mt-2 mb-2"
        onClick={handleDeleteOrder}
      >
        Descartar Pedido
      </button>
    </section>
  );
};

export default CheckoutContainer;
