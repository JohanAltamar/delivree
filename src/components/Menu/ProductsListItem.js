import React from "react";
import PropTypes from "prop-types";

const ProductsListItem = ({ id, name, url, price, description, categoryName }) => {
  return (
    <div className="menu__products-list-item">
      <img className="menu__products-list-item-image" src={url} alt={name} />
      <span className="menu__products-list-item-name mt-3">
        {name} - {categoryName}
      </span>
      <span className="menu__products-list-item-price">
        $ {price.toLocaleString("de-DE")}
      </span>
      <span className="menu__products-list-item-description">
        {description}
      </span>
    </div>
  );
};

export default ProductsListItem;

ProductsListItem.propTypes = {
  categoryName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};
