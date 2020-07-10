import React from "react";
import { Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addUnit, removeUnit, addItemToCart } from "../../redux/actions";

function ItemToCart({item, onHide, show}) {

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
          <button
            className="less-button"
            onClick={() => dispatch(removeUnit())}
          >
            {" "}
            -{" "}
          </button>
          <input value={itemQty} disabled />
          <button className="add-button" onClick={() => dispatch(addUnit())}>
            {" "}
            +{" "}
          </button>
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
