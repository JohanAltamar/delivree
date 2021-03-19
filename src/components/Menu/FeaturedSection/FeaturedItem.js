import React, { useState } from "react";
import PropTypes from "prop-types";
import FeaturedItemButtons from "./FeaturedItemButtons";

const FeaturedItem = ({ id, url, price, name }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <div className="feature__item" key={id}>
      <div onClick={handleClick}>
        <img className="feature__item-image" src={url} alt={name} />
        <h6 className="feature__item-name">{name}</h6>
        <span className="feature__item-price">
          $ {price.toLocaleString("de-DE")}
        </span>
      </div>
      {selected && <FeaturedItemButtons product={{ id, url, price, name }} />}
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
