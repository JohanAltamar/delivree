import types from "../types";

const initialState = {
  products: [
    {
      id: "sfasdfasfasfasfd",
      name: "spicy",
      categoryName: "burger",
      price: 12000,
      notes: "sin lechuga",
      qty: 10,
    },
    {
      id: "sfasdfasfasfasfda",
      name: "spicy",
      categoryName: "burger",
      price: 12000,
      notes: "",
      qty: 10,
    },
    {
      id: "sfasdfasfasfasfdb",
      name: "spicy",
      categoryName: "burger",
      price: 12000,
      notes: "",
      qty: 10,
    },
    {
      id: "sfasdfasfasfasfdc",
      name: "spicy",
      categoryName: "burger",
      price: 12000,
      notes: "",
      qty: 10,
    },
    {
      id: "sfasdfasfasfasfdd",
      name: "spicy",
      categoryName: "burger",
      price: 12000,
      notes: "",
      qty: 10,
    },
  ],
};

const findIndexById = (id, products) => {
  return products.findIndex((item) => item.id === id);
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
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
    default:
      return state;
  }
}
