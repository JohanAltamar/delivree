import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addUnit, removeUnit, addItemToCart } from "../../redux/actions";
import "./menu.css";

function ItemToCart({ item, onHide, show }) {
  const dispatch = useDispatch();
  const itemQty = useSelector((state) => state.items.itemQty);
  const itemSelected = useSelector((state) => state.items.itemSelected);

  const addToCart = () => {
    dispatch(addItemToCart(itemSelected, itemQty));
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="item-modal"
    >
      <FontAwesomeIcon icon={faTimes} id="close-modal" onClick={onHide}/>
      <figure
        id="item-container"
        className="brand-font-family brand-color-main"
      >
        <img src={item.url} alt={item.name} />
        <section id="item-sections">
          <section id="first-section">
            <figcaption id="item-name">
              <h4>
                <strong>{item.name}</strong>
              </h4>
            </figcaption>
            <figcaption id='item-price'>
              <h4>
                <span id='price-title'>Precio </span>
                ${" "}
                {item.price !== undefined
                  ? (item.price * itemQty).toLocaleString("de-DE")
                  : item.price}
              </h4>
            </figcaption>
          </section>
          <section id="second-section">
            <div id="item-ingredients">
              Pan de papa, 150grs de carne, tomate, cebolla caramelizada, queso
              cheddar
            </div>
            <div id="item-control">
              <button
                className="less-button"
                onClick={() => dispatch(removeUnit())}
              >
                {" "}
                -{" "}
              </button>
              <input value={itemQty} disabled />
              <button
                className="add-button"
                onClick={() => dispatch(addUnit())}
              >
                {" "}
                +{" "}
              </button>
            </div>
          </section>
          <section id="third-section">
            <button id="add-to-cart-button" onClick={addToCart}>
              Agregar <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          </section>
        </section>
      </figure>
    </Modal>
  );
}

export default ItemToCart;
