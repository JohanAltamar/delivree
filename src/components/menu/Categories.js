import React from "react";
import { useParams } from "react-router-dom";
import data from "./menuApi";

function Categories() {
  let { categoryName } = useParams();
  let category = data.filter((data) => data.category === categoryName);
  let items = category[0].items;

  return (
    <section
      id="menu-category-container"
      className="brand-font-family brand-color-secondary"
    >
      <h3 className="font-weight-bold text-capitalize text-center">
        {categoryName}
      </h3>
      <section id="menu-category-items-container">
      {items.map((product) => (
        <figure key={product.id}>
          <img src={product.url} alt={product.name} width="100%" />
          <figcaption><strong>{product.name}</strong></figcaption>
          <figcaption>Price: {product.price}</figcaption>
        </figure>
      ))}
      </section>
    </section>
  );
}

export default Categories;
