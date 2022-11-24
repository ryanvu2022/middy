import React from 'react';
import { CartState } from '../context/Context';
import { ChevronUp, ChevronDown } from '../icons';
import { Link } from 'react-router-dom';

const CartItem = ({ item }) => {
   const { dispatch } = CartState();
   const { id, image, name, price, quantity } = item;

   return (
      <div key={id} className="grid items-center grid-cols-cartgrid gap-x-6 my-6 mx-12">
         <Link to={`/product/${id}`}>
            <img src={image} alt={name} className="rounded w-24 h-24 object-cover" />
         </Link>   

         <div>
            <h4 className="text-lg font-medium mb-2 text-darkblue">{name}</h4>
            <h4 className="font-medium mb-2 tracking-wider">${price}</h4>
            <button 
            className="font-medium tracking-wide hover:text-red-600" 
            onClick={() => dispatch({
               type: "REMOVE_FROM_CART",
               payload: item
            })}
            >
            Remove
            </button>
         </div>

         <div>
            <button 
            className="text-darkblue"
            onClick={() => {                  
               dispatch({
                  type: "UPDATE_QUANTITY",
                  payload: {
                  id: id,
                  quantity: quantity + 1
                  }
               })
            }}
            >
            <ChevronUp />
            </button>

            <p className="text-center text-xl leading-none relative bottom-1">{quantity}</p>

            <button 
            className="text-darkblue" 
            onClick={() => {
               if (quantity > 1) {                      
                  dispatch({
                  type: "UPDATE_QUANTITY",
                  payload: {
                     id: id,
                     quantity: quantity - 1
                  }
                  })}
            }}
            >
            <ChevronDown />
            </button>
         </div>
      </div>
   )
}

export default CartItem;