import React from "react";
import { Modal} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function ItemToCart(props) {
  const { item, onHide, onAdd } = props;

  const addToCart = () => {
      onHide();
      onAdd();
  }
  return (
    <Modal
      {...props}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <figure
        id="item-container"
        className="brand-font-family brand-color-main"
      >
        <img src={item.url} alt={item.name} />
        <section id="first-section">
          <figcaption>
            <strong>{item.name}</strong>
          </figcaption>
          <figcaption>
            ${" "}
            {item.price !== undefined
              ? item.price.toLocaleString("de-DE")
              : item.price}
          </figcaption>
        </section>
        <section id="second-section">
          <button className="less-button"> - </button>
          <input value={1} />
          <button className="add-button"> + </button>
        </section>
        <section id="third-section">
          <button id="add-to-cart-button" onClick={addToCart}>
            Add <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </section>
      </figure>
    </Modal>
  );
}

export default ItemToCart;
