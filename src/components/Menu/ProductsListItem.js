import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { selectProduct } from "../../redux2/actions/productsActions";

const ProductsListItem = ({
  id,
  name,
  url,
  price,
  description,
  categoryName,
  noDescription = false,
  noPrice = false,
}) => {
  const dispatch = useDispatch();

  const handleProductClick = (productInfo) => {
    dispatch(selectProduct(productInfo));
  };

  return (
    <div
      className="menu__products-list-item"
      onClick={() =>
        handleProductClick({ id, name, url, price, description, categoryName })
      }
    >
      <img className="menu__products-list-item-image" src={url} alt={name} />
      <span className="menu__products-list-item-name mt-3">
        {name} - {categoryName}
      </span>
      {!noPrice && (
        <span className="menu__products-list-item-price">
          $ {price.toLocaleString("de-DE")}
        </span>
      )}
      {!noDescription && (
        <span className="menu__products-list-item-description">
          {description}
        </span>
      )}
    </div>
  );
};

export default ProductsListItem;

ProductsListItem.propTypes = {
  categoryName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  noDescription: PropTypes.bool,
  noPrice: PropTypes.bool,
  price: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};
