import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Modal from "./ItemToCartModal";
import Message from "./AddedToCart";
import data from "./menuApi";
import CartButton from "../CartButton";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";

function Categories() {
  let { categoryName } = useParams();
  let category = data.filter((data) => data.category === categoryName);
  let items = category[0].items;

  const dispatch = useDispatch();
  const itemModal = useSelector((state) => state.items.itemModalStatus);
  const itemAddedMsg = useSelector((state) => state.items.itemAddedMsg);
  const selected = useSelector((state) => state.items.itemSelected);

  const openModal = (item) => {
    dispatch(actions.openMenuItemModal(item))
  };

  const closeModal = () => {
    dispatch(actions.closeMenuItemModal())
  };

  useEffect(() => {
    return(()=>{
      dispatch(actions.resetItemsState())
    })
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
        show={itemModal}
        onHide={() => closeModal()}
        item={selected}
      />
      <CartButton id="cart-floating-button-home" />
    </section>
  );
}

export default Categories;
