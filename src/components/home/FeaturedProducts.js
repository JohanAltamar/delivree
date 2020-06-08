import React from "react";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  return (
    <section id="featured-products">
      <h2 className="brand-color-secondary brand-font-family font-weight-bold featured-products-title">
        {" "}
        Nuestros Preferidos
      </h2>
      <section className="featured-products-container">
        <figure className="featured-products-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2Fbroasted_chicken.jpg?alt=media&token=50fcefb0-d097-412c-a806-bdd9777385a6" alt="Product 1"/>
          <figcaption className="brand-color-secondary font-weight-bold">Broasted Chicken</figcaption>
          <figcaption className="brand-color-secondary">Price: $ 15.000</figcaption>
        </figure>
        <figure className="featured-products-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2Fbroasted_chicken.jpg?alt=media&token=50fcefb0-d097-412c-a806-bdd9777385a6" alt="Product 2"/>
          <figcaption className="brand-color-secondary font-weight-bold">Item #2</figcaption>
          <figcaption className="brand-color-secondary">Price: $ 15.000</figcaption>
        </figure>
        <figure className="featured-products-item">
          <img src="https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2Fbroasted_chicken.jpg?alt=media&token=50fcefb0-d097-412c-a806-bdd9777385a6" alt="Product 3"/>
          <figcaption className="brand-color-secondary font-weight-bold">Item #3</figcaption>
          <figcaption className="brand-color-secondary">Price: $ 15.000</figcaption>
        </figure>
      </section>
      <Link className="featured-products-view-all brand-color-secondary brand-font-family" to="/menu">Ver Todos</Link>
    </section>
  );
}

export default FeaturedProducts;
