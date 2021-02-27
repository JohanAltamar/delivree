import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProductsList from "./CartProductsList";

const ShoppingCartContainer = () => {
  const { products } = useSelector((state) => state.shoppingCart);

  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.qty * currentValue.price;
  const total = products.reduce(reducer, 0);

  return (
    <section className="cart__main-container grid__padding">
      {products.length === 0 ? (
        <h6>
          No hay productos en el carrito, agrégalos desde el{" "}
          <Link to="/menu">menú</Link>
        </h6>
      ) : (
        <>
          <div className="cart__products-container">
            <h6 className="text-center">Productos Seleccionados</h6>
            <CartProductsList products={products} />
            <div className="cart__products-spacer"></div>
          </div>
          <div className="cart__resume-wrapper">
            <div className="cart__resume-container">
              <h6 className="cart__resume-title">Resumen</h6>
              <h5 className="cart__resume-total mb-3">
                Total: $ <span>{total.toLocaleString("de-DE")}</span>
              </h5>
              <button className="btn btn-primary">Ordena Ahora</button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ShoppingCartContainer;
