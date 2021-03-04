import types from "../types";

const initialState = {
  products: [],
};

const findIndexById = (id, products) => {
  return products.findIndex((item) => item.id === id);
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case types.CART__RESET_CART_PROCESS:
      return { ...initialState };

    case types.CART__ADD_PRODUCT:
      const foundIndex = findIndexById(action.payload.id, state.products);
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
    case types.CART__UPDATE_PRODUCT:
      const index = findIndexById(action.payload.id, state.products);

      let products2 = [...state.products];
      products2[index] = {
        ...action.payload,
      };

      return {
        ...state,
        products: products2,
      };
    case types.CART__REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(({ id }) => id !== action.payload),
      };

    case types.CART__MOVE_USER_INFO_TO_CART:
      return { ...state, ...action.payload };
    case types.CART__START_FINISH_ORDER:
      return { ...state, ...action.payload };

    case types.CART__PROCESS_REPEAT_ORDER:
      return { ...state, products: action.payload };
    default:
      return state;
  }
}
