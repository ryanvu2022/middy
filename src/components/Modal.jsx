import React from 'react';
import { CartState } from '../context/Context';
import { CLOSE_MODAL, RESET_CART } from '../constants/actionTypes';


const Modal = () => {
   const { dispatch, modalDispatch } = CartState();

   return (
      <aside className="fixed z-50 top-0 left-0 w-full h-full bg-darkblue opacity-100 flex justify-center items-center">
       <div className="bg-white rounded px-10 py-8 text-center">
         <h4 className="capitalize leading-normal mb-4 text-darkblue font-bold text-xl">Remove all items from your shopping cart?</h4>
         <div className="flex justify-around">
           <button type="button" className="mt-4 font-bold uppercase transition-all duration-300 ease-linear bg-white text-darkblue border-2 border-darkblue hover:bg-darkblue hover:text-white font-medium px-6 py-2 rounded tracking-wider" 
            onClick={() => {
              dispatch({ type: RESET_CART });
              modalDispatch({ type: CLOSE_MODAL });
              
            }}>
             Confirm
           </button>
           <button type="button" className="mt-4 font-bold uppercase transition-all duration-300 ease-linear bgwhite text-darkred border-2 border-darkred hover:bg-darkred hover:text-white font-medium px-7 py-2 rounded tracking-wider"
            onClick={() => modalDispatch({ type: CLOSE_MODAL })}>
             Cancel
           </button>
         </div>
       </div>
     </aside>
   )
}

export default Modal