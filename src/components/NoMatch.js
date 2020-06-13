import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div id="no-match" className="brand-font-family brand-color-main">
      La ruta que quieres ver todavía no existe, te invitamos de vuelta a
      nuestro <Link to="/">restaurante</Link>
    </div>
  );
}

export default NoMatch;
