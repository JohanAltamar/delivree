import React from "react";
import Contact from "./Contact";
import WorkingHours from "./WorkingHours";

const Footer = () => {
  return (
    <section className="grid__footer footer__container">
      <WorkingHours />
      <Contact />
      <h6 className="footer__developer">
        Desarrollado por{" "}
        <a
          className="footer__developer-link"
          href="https://johanaltamar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Johan Altamar
        </a>
      </h6>
    </section>
  );
};

export default Footer;
