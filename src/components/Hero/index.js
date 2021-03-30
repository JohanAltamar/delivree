import React from "react";
import { useHistory } from "react-router-dom";

const Hero = (props) => {
  const history = useHistory();

  const handleOrderHereClick = () => {
    history.push("/menu");
  };

  return (
    <div {...props}>
      <span className="hero__message">Vive la experiencia</span>
      <button className="btn hero__button" onClick={handleOrderHereClick}>
        Ordena aquí
      </button>
    </div>
  );
};

export default Hero;
