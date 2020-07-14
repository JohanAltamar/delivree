import React from "react";
import { Image } from "react-bootstrap";
import {Link} from "react-router-dom"
import hero from "../../img/restaurantHero2.webp";
import "./hero.css"

const Hero = () => {
  return (
    <div id="hero">
      <Image id="hero-image" src={hero} className="d-sm-none" alt="hamburguesa foodies"/>
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
