import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartProductsList from "./CartProductsList";

const ShoppingCartContainer = () => {

  const { products } = useSelector((state) => state.shoppingCart);

  return (
    <section className="grid__padding">
      {products.length === 0 ? (
        <h6>
          No hay productos en el carrito, agrégalos desde el{" "}
          <Link to="/menu">menú</Link>
        </h6>
      ) : (
        <>
          <h6 className="text-center">Productos Seleccionados</h6>
          <div className="cart__products-container">
            <CartProductsList products={products} />
          </div>
          <div className="cart__resume-container">
            resumen
            <button>Ordena Ahora</button>
          </div>
        </>
      )}
    </section>
  );
};

export default ShoppingCartContainer;
