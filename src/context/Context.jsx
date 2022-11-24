import { createContext, useContext, useReducer } from 'react';
import { cartReducer, productReducer, modalReducer } from './Reducers';
import { products } from '../products/products';

const Cart = createContext();

const Context = ({ children }) => {

   const [state, dispatch] = useReducer(cartReducer, {
      products: products,
      cart: []
   });

   const [productState, productDispatch] = useReducer(productReducer, {
      byRating: 0,
      byFastDelivery: false,
      byStock: false
   });

   const [modalState, modalDispatch] = useReducer(modalReducer, { isOpen: false });

   return (
      <Cart.Provider value={{ state, dispatch, productState, productDispatch, modalState, modalDispatch }}>
         {children}
      </Cart.Provider>
   )
}

export default Context;

export const CartState = () => {
   return useContext(Cart)
}