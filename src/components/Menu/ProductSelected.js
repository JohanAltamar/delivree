import React from "react";
import PropTypes from "prop-types";
import ProductsListItem from "./ProductsListItem";

import AddNoteButton from "./ProductSelectedNote";
import Add2CartButton from "./ProductSelectedAdd2Cart";
import ControlButtons from "./ProductSelectedControlButtons";

const ProductSelected = ({ product }) => {
  const { qty, price } = product;

  return (
    <div>
      <h6 className="text-center mb-3">Producto seleccionado</h6>
      <ProductsListItem {...product} noDescription noPrice />

      {!isNaN(price * qty) ? (
        <h6 className="flex justify-space-between mt-2">
          <span>Total:</span>
          <span>$ {(price * qty).toLocaleString("de-DE")}</span>
        </h6>
      ) : (
        <h6 className="mt-2">Total: 0</h6>
      )}

      <ControlButtons product={product} />
      <Add2CartButton product={product} />
      <AddNoteButton product={product} />
    </div>
  );
};

export default ProductSelected;

ProductSelected.propTypes = {
  product: PropTypes.object.isRequired,
};
