import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART, UPDATE_QUANTITY, SORT_BY_PRICE, FILTER_BY_STOCK, FILTER_BY_DELIVERY, FILTER_BY_RATING, CLEAR_FILTERS, OPEN_MODAL, CLOSE_MODAL } from "../constants/actionTypes.jsx";

export const cartReducer = (state, action) => {
   switch (action.type) {
      case ADD_TO_CART:
         return {
            ...state, 
            cart: [...state.cart, { ...action.payload, quantity: 1 }]
         };
      case REMOVE_FROM_CART:
         return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.id)
         };
      case RESET_CART:
         return {
            ...state,
            cart: []
         }
      case UPDATE_QUANTITY:
         return {
            ...state,
            cart: state.cart.filter(item => 
               item.id === action.payload.id
                  ? item.quantity = action.payload.quantity
                  : item.quantity )
         }
      default:
         return state;
   }
}

export const productReducer = (state, action) => {
   switch (action.type) {
      case SORT_BY_PRICE:
         return { ...state, sort: action.payload };
      case FILTER_BY_STOCK:
         return { ...state, byStock: !state.byStock};
      case FILTER_BY_DELIVERY:
         return { ...state, byFastDelivery: !state.byFastDelivery };
      case FILTER_BY_RATING:
         return { ...state, byRating: action.payload };
      case CLEAR_FILTERS:
         return { byStock: false, byFastDelivery: false, byRating: 0 };
      default:
         return state;
   }
}

export const modalReducer = (state, action) => {
   switch (action.type) {
      case OPEN_MODAL:
         return { isOpen: true };
      case CLOSE_MODAL:
         return { isOpen: false };
      default:
         return state;
   }
}