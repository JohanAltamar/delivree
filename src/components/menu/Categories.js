import React from "react";
import { useParams } from "react-router-dom";

function Categories() {
  let { categoryName } = useParams();
  return (
    <section
      id="menu-category-container"
      className="brand-font-family brand-color-secondary"
    >
      <h3 className="font-weight-bold text-capitalize text-center">{categoryName}</h3>
    </section>
  );
}

export default Categories;
