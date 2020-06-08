import React from "react";

function Location() {
  return (
    <section id="location">
      <h2 className="brand-color-main brand-font-family font-weight-bold">
        Nuestra Ubicación
      </h2>
      <figure className="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.66159585281395!2d-74.77843468094898!3d10.941243186305353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5cd5858087f87%3A0x87f870c5748444d7!2sComida%20rapida%20La%20bonga%20del%20sabor!5e0!3m2!1ses!2sco!4v1591587225052!5m2!1ses!2sco"
        //   width="400"
        //   height="200"
          frameborder="0"
          style={{border:"0"}}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe> 
        <figcaption className="brand-color-main brand-font-family"><strong>Dirección: </strong> Calle 19 # 4B - 16</figcaption>
      </figure>
    </section>
  );
}

export default Location;
