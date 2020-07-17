import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Modal from "./ItemToCartModal";
import Message from "./AddedToCart";
import data from "./menuApi";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import "./menu.css";

function Categories() {
  let { categoryName } = useParams();
  let category = data.filter((data) => data.category === categoryName);
  let items = category[0].items;

  const dispatch = useDispatch();
  const itemModal = useSelector((state) => state.items.itemModalStatus);
  const itemAddedMsg = useSelector((state) => state.items.itemAddedMsg);
  const selected = useSelector((state) => state.items.itemSelected);

  const openModal = (item) => {
    dispatch(actions.openMenuItemModal(item));
  };

  const closeModal = () => {
    dispatch(actions.closeMenuItemModal());
  };

  useEffect(() => {
    return () => {
      dispatch(actions.resetItemsState());
    };
  }, [dispatch]);

  return (
    <section
      id="menu-category-container"
      className="brand-font-family brand-color-secondary"
    >
      <Helmet>
        <title>Foodies restaurant - {categoryName} Menu</title>
        <meta
          name="description"
          content="Foodies menu is too different. We offer burgers, cocktails, salads, hot dogs, pastas, italian food, fast food and sandwich"
        />
      </Helmet>
      <Message
        show={itemAddedMsg}
        delay={3000}
        onClose={() => dispatch(actions.itemAddedToCart(false))}
      />
      <h3 className="section-title font-weight-bold text-capitalize text-center">
        {categoryName}
      </h3>
      <section id="menu-category-items-container">
        {items.map((product) => (
          <figure
            className="col-12 col-sm-4 col-lg-3"
            key={product.id}
            onClick={() => openModal(product)}
          >
            <img src={product.url} alt={product.name} width="100%" />
            <figcaption>
              <h5>
                <strong>{product.name}</strong>
              </h5>
            </figcaption>
            <figcaption>
              Precio: ${product.price.toLocaleString("DE-de")}
            </figcaption>
            <figcaption>
              Ingredientes: Pan de papa, carne 180 grs, tomate, cebolla
              caramelizada, lechuga romana, queso cheddar
            </figcaption>
          </figure>
        ))}
      </section>
      <Modal
        id="item-modal"
        show={itemModal}
        onHide={() => closeModal()}
        item={selected}
      />
    </section>
  );
}

export default Categories;
