import { createContext, useContext, useReducer, useEffect } from 'react';
import { cartReducer, productReducer, modalReducer } from './Reducers';
import axios from 'axios';
import { INITIALIZE_CART } from '../constants/actionTypes';

const Cart = createContext();

const Context = ({ children }) => {

   const initialState = {
      products: [],
      cart: [],
      isLoading: true
   }

   const [state, dispatch] = useReducer(cartReducer, initialState);

   useEffect(() => {
      const getProducts = async () => {
         const res = await axios.get("https://middy-backend-api-production.up.railway.app/products");
         dispatch({
            type: INITIALIZE_CART,
            payload: {
               ...initialState,
               products: res.data,
               isLoading: false
            }
         });
      };

      getProducts();
   },[])

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