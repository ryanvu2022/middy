import { createContext, useContext, useReducer } from 'react';
import { cartReducer, productReducer } from './Reducers';
import { products } from '../products/products';

const Cart = createContext();

const Context = ({ children }) => {

   const [state, dispatch] = useReducer(cartReducer, {
      products: products,
      cart: []
   })

   const [productState, productDispatch] = useReducer(productReducer, {
      byRating: 0,
      byFastDelivery: false,
      byStock: false
   })

   return (
      <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
         {children}
      </Cart.Provider>
   )
}

export default Context;

export const CartState = () => {
   return useContext(Cart)
}