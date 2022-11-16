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