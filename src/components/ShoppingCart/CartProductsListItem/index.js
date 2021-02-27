import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { updateCartProductAction } from "../../../redux2/actions/cartActions";

import ItemTitlte from "./ItemTitlte";
import ItemPriceQty from "./ItemPriceQty";
import ItemQtyButtons from "./ItemQtyButtons";
import ItemNotes from "./ItemNotes";
import ItemRemoveBtn from "./ItemRemoveBtn";

const CartProductsListItem = ({ product }) => {
  const { id, name, categoryName, price, notes, qty } = product;

  const dispatch = useDispatch();

  const handleNotesChange = ({ target }) => {
    const { value } = target;
    dispatch(updateCartProductAction({ ...product, notes: value }));
  };

  const handleQtyChange = (factor) => {
    dispatch(
      updateCartProductAction({ ...product, qty: product.qty + factor })
    );
  };

  return (
    <div key={id} className="cart__products-item-container">
      <ItemRemoveBtn id={product.id} />
      <ItemTitlte title={`${name} - ${categoryName}`} />
      <ItemPriceQty price={price} qty={qty} />
      <ItemQtyButtons
        addFnc={() => handleQtyChange(1)}
        subtractFnc={() => handleQtyChange(-1)}
      />
      <ItemNotes notes={notes} notesChangeFnc={handleNotesChange} />
    </div>
  );
};

export default CartProductsListItem;

CartProductsListItem.propTypes = {
  product: PropTypes.object.isRequired,
};
