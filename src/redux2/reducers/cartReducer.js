import types from "../types";

const initialState = {
  products: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case types.CART__ADD_PRODUCT:
      const foundIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      let products = [...state.products];
      if (foundIndex === -1) {
        products = [...products, action.payload];
      } else {
        products[foundIndex] = {
          ...products[foundIndex],
          qty: products[foundIndex].qty + action.payload.qty,
          notes: products[foundIndex].notes.concat(" " + action.payload.notes),
        };
      }

      return {
        ...state,
        products,
      };

    default:
      return state;
  }
}
