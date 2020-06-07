import React from "react";
import { Image } from "react-bootstrap";
import {Link} from "react-router-dom"
import hero from "../../img/hero.png";

const Hero = () => {
  return (
    <div id="hero">
      <Image fluid src={hero} className="d-sm-none" />
      <div id="hero-caption-container">
        <span id="hero-caption">Vive la experiencia</span>
      </div>
      
      <div id="hero-button-container">
        <Link to="/menu" id="hero-button">Ordena Aquí</Link>
      </div>
    </div>
  );
};

export default Hero;
