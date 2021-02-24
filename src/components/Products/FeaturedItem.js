import React from "react";
import PropTypes from "prop-types";

const FeaturedItem = ({ id, url, price, name }) => {
  return (
    <div className="feature__item" key={id}>
      <img className="feature__item-image" src={url} alt={name} />
      <h6 className="feature__item-name">{name}</h6>
      <span className="feature__item-price">
        $ {price.toLocaleString("de-DE")}
      </span>
    </div>
  );
};

export default FeaturedItem;

FeaturedItem.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
