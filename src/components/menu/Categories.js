import React from "react";
import { useParams } from "react-router-dom";
import Modal from "./ItemToCart";
import Message from "./AddedToCart";
import data from "./menuApi";
import CartButton from "../CartButton"
import { connect } from "react-redux";
import { itemModalStatus, itemAddedToCart, itemSelected, resetUnits } from "../../redux/actions";

function Categories({
  itemModalStatus,
  itemModal,
  itemAddedMsg,
  itemAddedToCart,
  selected, setSelected, resetItems
}) {
  let { categoryName } = useParams();
  let category = data.filter((data) => data.category === categoryName);
  let items = category[0].items;

  const openModal = (item) => {
    itemModalStatus(true);
    setSelected(item);
  };

  const closeModal = () => {
    itemModalStatus(false);
    setSelected({});
    resetItems();
  };

  return (
    <section
      id="menu-category-container"
      className="brand-font-family brand-color-secondary"
    >
      <Message
        show={itemAddedMsg}
        delay={3000}
        onClose={() => itemAddedToCart(false)}
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
        onAdd={() => itemAddedToCart(true)}
        item={selected}
      />
      <CartButton id="cart-floating-button-home" />
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    itemModal: state.itemModalStatus,
    itemAddedMsg: state.itemAddedMsg,
    selected: state.itemSelected
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    itemModalStatus(status) {
      dispatch(itemModalStatus(status));
    },
    itemAddedToCart(satus) {
      dispatch(itemAddedToCart(satus));
    },
    setSelected(product){
      dispatch(itemSelected(product))
    },
    resetItems() {
      dispatch(resetUnits());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
