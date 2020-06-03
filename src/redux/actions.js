import { ADD_TO_CART, REMOVE_FROM_CART} from './actions';

export const addToCart = (product) => {
    return { 
        type: ADD_TO_CART,
        product
      }
}

export const removeFromCart = (product) => {
    return { 
        type: REMOVE_FROM_CART, 
        product
    }
}