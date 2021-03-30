import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProductsList from "./CartProductsList";
import CartResumeContainer from "./CartResumeContainer";

const ShoppingCartContainer = () => {
  const { products } = useSelector((state) => state.shoppingCart);

  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.qty * currentValue.price;
  const total = products.reduce(reducer, 0);

  return (
    <section className="cart__main-container grid__padding">
      {products.length === 0 ? (
        <h6 className="cart__products-empty text-center mt-5">
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
          <CartResumeContainer total={total} />
        </>
      )}
    </section>
  );
};

export default ShoppingCartContainer;
