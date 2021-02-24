import React from "react";

const phoneNumber = "3016669240";
const whatsappNumber = "573016669240";
const whatsappMessage =
  "Buen día, me encantaría hablar con alguno de sus colaboradores";

function Contact() {
  return (
    <div className="footer__contact">
      <h4>Contáctanos</h4>
      <a href={`tel:${phoneNumber}`}>
        <img
          className="footer__logos"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Circle-icons-smartphone.svg/120px-Circle-icons-smartphone.svg.png"
          alt="telephone icon"
        />
      </a>
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURI(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="footer__logos"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png"
          alt=""
        />
      </a>
      <a
        href="https://www.instagram.com/johan_altamar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="footer__logos"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png"
          alt="instagram logo"
        />
      </a>
    </div>
  );
}

export default Contact;
