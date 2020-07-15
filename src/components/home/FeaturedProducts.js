import React from "react";
import { Link } from "react-router-dom";
import "./featuredProducts.css";

function FeaturedProducts() {
  return (
    <section id="featured-products">
      <h3 className="brand-color-secondary brand-font-family font-weight-bold featured-products-title">
        {" "}
        Nuestros Preferidos
      </h3>
      <section className="featured-products-container">
        <figure className="featured-products-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2FbroastedChicken100.webp?alt=media&token=0c8b5f03-f10b-467c-a7eb-d7225aee1f88"
            alt="Broasted Chicken"
          />
          <figcaption className="brand-color-secondary font-weight-bold">
            Broasted Chicken
          </figcaption>
          <figcaption className="brand-color-secondary">$ 15.000</figcaption>
        </figure>
        <figure className="featured-products-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2FbroastedChicken100.webp?alt=media&token=0c8b5f03-f10b-467c-a7eb-d7225aee1f88"
            alt="Broadsted Chicken"
          />
          <figcaption className="brand-color-secondary font-weight-bold">
            Broasted Chicken
          </figcaption>
          <figcaption className="brand-color-secondary">$ 15.000</figcaption>
        </figure>
        <figure className="featured-products-item">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/cloudstorage-abfc4.appspot.com/o/images%2FbroastedChicken100.webp?alt=media&token=0c8b5f03-f10b-467c-a7eb-d7225aee1f88"
            alt="Broasted Chicken"
          />
          <figcaption className="brand-color-secondary font-weight-bold">
            Broasteddsdsdsds
          </figcaption>
          <figcaption className="brand-color-secondary">$ 15.000</figcaption>
        </figure>
      </section>
      <Link
        className="featured-products-view-all brand-color-secondary brand-font-family"
        to="/menu"
      >
        Ver Todos
      </Link>
    </section>
  );
}

export default FeaturedProducts;
