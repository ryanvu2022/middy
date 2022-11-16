import { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker'; 
import { cartReducer } from './Reducers';
import images from "../products/images";

const Cart = createContext();

const Context = ({ children }) => {
   const products = images.map((image, index) => ({
      id: index,
      name: faker.commerce.productName(),
      price: faker.commerce.price(35, 65).split(".")[0],
      image: image,
      inStock: faker.datatype.boolean(),
      fastDelivery: faker.datatype.boolean(),
      ratings: 5  
   }))

   const initialState = {
      products: products,
      cart: []
   }

   const [state, dispatch] = useReducer(cartReducer, initialState)

   return (
      <Cart.Provider value={{ state, dispatch }}>
         {children}
      </Cart.Provider>
   )
}

export default Context;

export const CartState = () => {
   return useContext(Cart)
}