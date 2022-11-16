import { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker'; 
import { cartReducer, productReducer } from './Reducers';
import images from "../products/images";

const Cart = createContext();

const Context = ({ children }) => {
   const products = images.map((image, index) => ({
      id: index,
      name: faker.commerce.productName(),
      price: faker.commerce.price(35, 65, 0),
      image: image,
      inStock: faker.datatype.boolean(),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.commerce.price(1,5,0)
   }))

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