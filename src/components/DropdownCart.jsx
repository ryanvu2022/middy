import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import { REMOVE_FROM_CART } from '../constants/actionTypes';

const DropdownCart = ({ setIsDropdownOpen}) => {
   const { state: { cart }, dispatch } = CartState();
   const [subtotal, setSubtotal] = useState(0);

   useEffect(() => {
      const total = cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
      setSubtotal(total);
    }, [cart]);

   return (
      <div className="z-50">
         {cart.length > 0
            ?  <>
                  <Link to="/cart" className="flex items-center justify-center">
                     <button className="transition-all duration-300 ease-linear bg-darkblue text-white hover:bg-blue-500 text-xl tracking-wide w-full py-2 px-4 m-4 mb-1 rounded" onClick={() => setIsDropdownOpen(false)}>
                        Go to Cart
                     </button>
                  </Link>

                  {cart.map(item => (
                     <span className="flex justify-between items-center mx-4 mt-4 p-4 border border-darkblue text-black rounded" key={item.id}>
                        <img src={item.image} alt={item.name}
                           className="rounded w-12 h-12 object-cover"
                        />
                        <div className="flex flex-col flex-1 px-5 py-0">
                           <span>{item.name}</span>
                           <span>${item.price}</span>

                        </div>
                        <AiFillDelete className="cursor-pointer text-2xl" onClick={() => {
                           dispatch({
                              type: REMOVE_FROM_CART,
                              payload: item
                           })
                        }}/>
                     </span>
                  ))}

                  <h4 className="flex justify-between text-lg mx-5 mt-2 mb-4 text-black">
                     Subtotal <span>${subtotal.toFixed(2)}</span>
                  </h4>                                 
               </>
            :  <div className="py-2 px-4 rounded">
                  <p className="text-darkblue font-semibold text-lg ">Cart is Empty!</p>
               </div>
         }
      </div>
   )
}

export default DropdownCart;