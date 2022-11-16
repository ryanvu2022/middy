export const cartReducer = (state, action) => {
   switch (action.type) {
      case "ADD_TO_CART":
         return {
            ...state, 
            cart: [...state.cart, { ...action.payload, quantity: 1 }]
         };
      case "REMOVE_FROM_CART":
         return {
            ...state,
            cart: state.cart.filter(item => item.id !== action.payload.id)
         };
      case "RESET_CART":
         return {
            ...state,
            cart: []
         }
      case "UPDATE_QUANTITY":
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
      case "SORT_BY_PRICE":
         return { ...state, sort: action.payload };
      case "FILTER-BY-STOCK":
         return { ...state, byStock: !state.byStock};
      case "FILTER_BY_DELIVERY":
         return { ...state, byFastDelivery: !state.byFastDelivery };
      case "FILTER_BY_RATING":
         return { ...state, byRating: action.payload };
      case "CLEAR_FILTERS":
         return { byStock: false, byFastDelivery: false, byRating: 0 };
      default:
         return state;
   }
}