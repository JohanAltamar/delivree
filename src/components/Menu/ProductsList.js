import React from "react";
import PropTypes from "prop-types";
import ProductsListItem from "./ProductsListItem";

const ProductsList = ({ products, category }) => {
  return (
    products.length > 0 && (
      <div className="menu__products-list">
        {products.map((product) => (
          <ProductsListItem key={product.id} categoryName={category} {...product} />
        ))}
      </div>
    )
  );
};

export default ProductsList;

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
};
