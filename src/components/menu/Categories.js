import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./ItemToCart";
import Message from "./AddedToCart";
import data from "./menuApi";

function Categories() {
  let { categoryName } = useParams();
  let category = data.filter((data) => data.category === categoryName);
  let items = category[0].items;

  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState({});

  const openModal = (item) => {
    setModalShow(true);
    setSelected(item);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <section
      id="menu-category-container"
      className="brand-font-family brand-color-secondary"
    >
      <Message show={show} delay={3000} onClose={() => setShow(false)} />
      <h3 className="font-weight-bold text-capitalize text-center">
        {categoryName}
      </h3>
      <section id="menu-category-items-container">
        {items.map((product) => (
          <figure key={product.id} onClick={() => openModal(product)}>
            <img src={product.url} alt={product.name} width="100%" />
            <figcaption>
              <strong>{product.name}</strong>
            </figcaption>
            <figcaption>Price: {product.price}</figcaption>
          </figure>
        ))}
      </section>
      <Modal
        id="item-modal"
        show={modalShow}
        onHide={() => closeModal()}
        onAdd={() => setShow(true)}
        item={selected}
      />
    </section>
  );
}

export default Categories;
